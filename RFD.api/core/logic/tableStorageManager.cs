using Microsoft.AspNetCore.Http.Extensions;
using Azure.Data.Tables;
using Azure;
using RFD.API.Interface.Managers;
using RFD.API.Enums.Managers;
using RFD.API.Managers.Tools;
using Newtonsoft.Json;

namespace RFD.API.Managers
{
    public class TableStorageManager : ITableStorageManager, ITableStorageToolbox
    {
        private readonly IConfiguration _configuration;
        public TableStorageManager(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        private async Task<TableClient> CreateClient(string _tableName)
        {
            TableClient client = new TableClient(_configuration.GetValue<string>("TableStorage:ConnectionString"), _tableName);

            await client.CreateIfNotExistsAsync();

            return client;
        }
        private T Execute<T>(TableClient client, ITableStorageManagerArgs.Get args)
            where T : class, ITableEntity, new()
        {
            try
            {
                return client.GetEntity<T>(args.PartitionKey, args.RowKey).Value;
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.ToString());
                return new();
            }
        }
        private Response? Execute<T>(TableClient client, ITableStorageManagerArgs.Add<T> args)
            where T : class, ITableEntity, new()
        {
            try
            {
                return client.AddEntity(args.Entity);
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.ToString());
                return null;
            }
        }

        private Response? Execute<T>(TableClient client, ITableStorageManagerArgs.Update<T> args)
            where T : class, ITableEntity, new()
        {
            try
            {
                return client.UpsertEntity(args.Entity);
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.ToString());
                return null;
            }
        }

        private Response? Execute(TableClient client, ITableStorageManagerArgs.Delete args)
        {
            try
            {
                return client.DeleteEntity(args.PartitionKey, args.RowKey);
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.ToString());
                return null;
            }
        }

        public async Task<T> GetValuesAsync<T>(ITableStorageManagerArgs.Get args)
            where T : class, ITableEntity, new()
        {
            if (!args.IsValid())
            {
                throw new ArgumentException("TableStorageManagerQueryArgs is InValid");
            }

            TableClient client = await CreateClient(args.TableName);

            return Execute<T>(client, args);
        }

        public async Task<Response?> AddValuesAsync<T>(ITableStorageManagerArgs.Add<T> args)
            where T : class, ITableEntity, new()
        {
            if (!args.IsValid())
            {
                throw new ArgumentException("TableStorageManagerQueryArgs is InValid");
            }

            TableClient client = await CreateClient(args.TableName);

            return Execute(client, args);
        }

        public async Task<Response?> UpdateValuesAsync<T>(ITableStorageManagerArgs.Update<T> args)
            where T : class, ITableEntity, new()
        {
            if (!args.IsValid())
            {
                throw new ArgumentException("TableStorageManagerQueryArgs is InValid");
            }

            TableClient client = await CreateClient(args.TableName);

            return Execute(client, args);
        }

        public async Task<Response?> DeleteValuesAsync(ITableStorageManagerArgs.Delete args)
        {
            if (!args.IsValid())
            {
                throw new ArgumentException("TableStorageManagerQueryArgs is InValid");
            }

            TableClient client = await CreateClient(args.TableName);

            return Execute(client, args);
        }

        public string GeneratePartitionKey(IEnumerable<string> keys)
        {
            string partitionKey = "";

            foreach(string key in keys){
                partitionKey += $@"{key} - ";
            }

            return partitionKey.Substring(0, partitionKey.Length - 3);
        }

        public string GenerateRowKey(IEnumerable<string> keys)
        {
            string partitionKey = "";

            foreach(string key in keys){
                partitionKey += $@"{key}-";
            }

            return partitionKey.Substring(0, partitionKey.Length - 1);
        }
    }
}