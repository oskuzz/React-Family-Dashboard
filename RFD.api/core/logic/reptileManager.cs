using RFD.API.Models;
using RFD.API.Interface.Managers;
using Azure;
using RFD.API.Models.Managers;
using RFD.API.Managers.Tools;
using System.Linq.Expressions;
using Newtonsoft.Json;

namespace RFD.API.Managers
{
    public class ReptileEntityArgs
    {
        public required string Gender { get; set; }
        public required string Species { get; set; }
        public required string Name { get; set; }
        public bool IsValid()
        {
            return (Gender == "Male" || Gender == "Female") &&
            !string.IsNullOrWhiteSpace(Species) &&
            !string.IsNullOrWhiteSpace(Name);
        }
    }

    public class ReptileMeasureEntityArgs
    {
        public required Reptile reptile { get; set; }
        public required ReptileMeasures measure { get; set; }
        public bool IsValid()
        {
            return reptile != null && measure != null;
        }
    }

    public class ReptileManager : IReptileManager
    {
        private readonly ITableStorageManager _storageManager;
        private readonly ITableStorageToolbox _storageToolbox;
        private readonly string _TableName = "Reptiles";
        public ReptileManager(ITableStorageManager storageManager, ITableStorageToolbox storageToolbox)
        {
            _storageManager = storageManager;
            _storageToolbox = storageToolbox;
        }

        private List<T> UpsertObjectToListByKey<T>(List<T> list, T obj, string key)
        {
            var itemIndex = list.FindIndex(a => a?.GetType().GetProperty(key)?.GetValue(a, null) == obj?.GetType().GetProperty(key)?.GetValue(obj, null));

            if (itemIndex >= 0)
            {
                list[itemIndex] = obj;
            }
            else
            {
                list.Add(obj);
            }

            return list;
        }

        public async Task<Response?> AddReptileBreeding(Reptile female, Reptile male, ReptileBreeding breeding)
        {
            throw new NotImplementedException();
        }

        public async Task<Response?> AddReptileEntity(Reptile reptile)
        {
            if (reptile == null) throw new InvalidDataException("ReptileEntityArgs is InValid");

            try
            {
                return await _storageManager.AddValuesAsync(new TableStorageManagerArgs.Add<Reptile>()
                {
                    TableName = _TableName,
                    Entity = reptile
                });
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.ToString());
                return null;
            }
        }

        public async Task<Response?> AddReptileFeeding(Reptile reptile, ReptileFeeding feeding)
        {
            throw new NotImplementedException();
        }

        public async Task<Response?> AddReptileGene(Reptile reptile, ReptileGeneMap GeneMap)
        {
            throw new NotImplementedException();
        }

        public async Task<Response?> AddReptileInfoEntity(ReptileInfo info)
        {
            throw new NotImplementedException();
        }

        public async Task<Response?> AddReptileMeasure(Reptile reptile, ReptileMeasures measure)
        {
            if (reptile == null || measure == null) throw new InvalidDataException("Given arguments are InValid");

            try
            {
                
                var _PartitionKey = _storageToolbox.GeneratePartitionKey([_TableName, "ReptileInformation"]);
                var _RowKey = _storageToolbox.GenerateRowKey([reptile.Gender ?? "undefined", reptile.ReptileSpecies ?? "undefined", reptile.Name ?? "undefined"]);

                ReptileInfo reptileInfo = await _storageManager.GetValuesAsync<ReptileInfo>(new TableStorageManagerArgs.Get()
                {
                    TableName = _TableName,
                    PartitionKey = _PartitionKey,
                    RowKey = _RowKey
                });

                reptileInfo.PartitionKey = _PartitionKey;
                reptileInfo.RowKey = _RowKey;
                reptileInfo.Measures = UpsertObjectToListByKey(reptileInfo.Measures ?? [], measure, "Date");
                
                return await _storageManager.UpdateValuesAsync(new TableStorageManagerArgs.Update<ReptileInfo>()
                {
                    TableName = _TableName,
                    Entity = reptileInfo
                });
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.ToString());
                return null;
            }
        }

        public async Task<Response?> AddReptileSkinChange(Reptile reptile, ReptileSkinChange skinChange)
        {
            throw new NotImplementedException();
        }

        public async Task<Response?> AddReptileTerrarium(Reptile reptile, ReptileTerrarium terrarium)
        {
            throw new NotImplementedException();
        }

        public async Task<IEnumerable<Reptile>?> GetAllReptileEntitiesAsync()
        {
            throw new NotImplementedException();
        }

        public async Task<IEnumerable<ReptileInfo>?> GetAllReptileInfoEntitiesAsync()
        {
            throw new NotImplementedException();
        }

        public async Task<Reptile?> GetReptileEntityAsync(ReptileEntityArgs args)
        {
            if (!args.IsValid()) throw new InvalidDataException("ReptileEntityArgs is InValid");

            try
            {
                return await _storageManager.GetValuesAsync<Reptile>(new TableStorageManagerArgs.Get()
                {
                    TableName = _TableName,
                    PartitionKey = _storageToolbox.GeneratePartitionKey([_TableName, "Reptile"]),
                    RowKey = _storageToolbox.GenerateRowKey([args.Gender, args.Species, args.Name])
                });
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.ToString());
                return null;
            }
        }
        public async Task<ReptileInfo?> GetReptileInfoAsync(ReptileEntityArgs args)
        {
            if (!args.IsValid()) throw new InvalidDataException("ReptileEntityArgs is InValid");

            try
            {
                return await _storageManager.GetValuesAsync<ReptileInfo>(new TableStorageManagerArgs.Get()
                {
                    TableName = _TableName,
                    PartitionKey = _storageToolbox.GeneratePartitionKey([_TableName, "ReptileInformation"]),
                    RowKey = _storageToolbox.GenerateRowKey([args.Gender, args.Species, args.Name])
                });
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.ToString());
                return null;
            }
        }

        public async Task<Response?> RemoveReptileBreeding(Reptile female, Reptile male, ReptileBreeding breeding)
        {
            throw new NotImplementedException();
        }

        public async Task<Response?> RemoveReptileEntity(Reptile reptile)
        {
            throw new NotImplementedException();
        }

        public async Task<Response?> RemoveReptileFeeding(Reptile reptile, ReptileFeeding feeding)
        {
            throw new NotImplementedException();
        }

        public async Task<Response?> RemoveReptileInfoEntity(ReptileInfo info)
        {
            throw new NotImplementedException();
        }

        public async Task<Response?> RemoveReptileMeasure(Reptile reptile, ReptileMeasures measure)
        {
            throw new NotImplementedException();
        }

        public async Task<Response?> RemoveReptileSkinChange(Reptile reptile, ReptileSkinChange skinChange)
        {
            throw new NotImplementedException();
        }

        public async Task<Response?> UpdateReptileBreeding(Reptile female, Reptile male, ReptileBreeding breeding)
        {
            throw new NotImplementedException();
        }

        public async Task<Response?> UpdateReptileEntity(Reptile reptile)
        {
            throw new NotImplementedException();
        }

        public async Task<Response?> UpdateReptileFeeding(Reptile reptile, ReptileFeeding feeding)
        {
            throw new NotImplementedException();
        }

        public async Task<Response?> UpdateReptileInfoEntity(ReptileInfo info)
        {
            throw new NotImplementedException();
        }

        public async Task<Response?> UpdateReptileMeasure(Reptile reptile, ReptileMeasures measure)
        {
            throw new NotImplementedException();
        }

        public async Task<Response?> UpdateReptileSkinChange(Reptile reptile, ReptileSkinChange skinChange)
        {
            throw new NotImplementedException();
        }
    }
}