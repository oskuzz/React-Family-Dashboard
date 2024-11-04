using Azure;
using Azure.Data.Tables;

namespace RFD.API.Interface.Managers
{
    public interface ITableStorageManager
    {
        public Task<T?> GetValuesAsync<T>(ITableStorageManagerArgs.Get args)
            where T : class, ITableEntity, new();
        public Task<Response?> AddValuesAsync<T>(ITableStorageManagerArgs.Add<T> args)
            where T : class, ITableEntity, new();
        public Task<Response?> UpdateValuesAsync<T>(ITableStorageManagerArgs.Update<T> args)
            where T : class, ITableEntity, new();
        public Task<Response?> DeleteValuesAsync(ITableStorageManagerArgs.Delete args);
    }

    public interface ITableStorageManagerArgs
    {
        public interface ITableStorageOperation
        {
            string TableName { get; set; }
            bool IsValid();
        }
        public interface Get : ITableStorageOperation
        {
            public string PartitionKey { get; set; }
            public string RowKey { get; set; }
        };
        public interface Add<T> : ITableStorageOperation
        {
            public T Entity { get; set; }
        };
        public interface Update<T> : ITableStorageOperation
        {
            public T Entity { get; set; }
        };
        public interface Delete : ITableStorageOperation
        {
            public string PartitionKey { get; set; }
            public string RowKey { get; set; }
        };

    }
}