using RFD.API.Models;
using RFD.API.Interface.Managers;
using Azure;
using RFD.API.Models.Managers;
using RFD.API.Managers.Tools;

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

        public Response? AddReptileBreeding(Reptile female, Reptile male, ReptileBreeding breeding)
        {
            throw new NotImplementedException();
        }

        public Response? AddReptileEntity(Reptile reptile)
        {
            throw new NotImplementedException();
        }

        public Response? AddReptileFeeding(Reptile reptile, ReptileFeeding feeding)
        {
            throw new NotImplementedException();
        }

        public Response? AddReptileGene(Reptile reptile, ReptileGeneMap GeneMap)
        {
            throw new NotImplementedException();
        }

        public Response? AddReptileInfoEntity(ReptileInfo info)
        {
            throw new NotImplementedException();
        }

        public Response? AddReptileMeasure(Reptile reptile, ReptileMeasures measure)
        {
            throw new NotImplementedException();
        }

        public Response? AddReptileSkinChange(Reptile reptile, ReptileSkinChange skinChange)
        {
            throw new NotImplementedException();
        }

        public Response? AddReptileTerrarium(Reptile reptile, ReptileTerrarium terrarium)
        {
            throw new NotImplementedException();
        }

        public Task<IEnumerable<Reptile>?> GetAllReptileEntitiesAsync()
        {
            throw new NotImplementedException();
        }

        public Task<IEnumerable<ReptileInfo>?> GetAllReptileInfoEntitiesAsync()
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

        public Response? RemoveReptileBreeding(Reptile female, Reptile male, ReptileBreeding breeding)
        {
            throw new NotImplementedException();
        }

        public Response? RemoveReptileEntity(Reptile reptile)
        {
            throw new NotImplementedException();
        }

        public Response? RemoveReptileFeeding(Reptile reptile, ReptileFeeding feeding)
        {
            throw new NotImplementedException();
        }

        public Response? RemoveReptileInfoEntity(ReptileInfo info)
        {
            throw new NotImplementedException();
        }

        public Response? RemoveReptileMeasure(Reptile reptile, ReptileMeasures measure)
        {
            throw new NotImplementedException();
        }

        public Response? RemoveReptileSkinChange(Reptile reptile, ReptileSkinChange skinChange)
        {
            throw new NotImplementedException();
        }

        public Response? UpdateReptileBreeding(Reptile female, Reptile male, ReptileBreeding breeding)
        {
            throw new NotImplementedException();
        }

        public Response? UpdateReptileEntity(Reptile reptile)
        {
            throw new NotImplementedException();
        }

        public Response? UpdateReptileFeeding(Reptile reptile, ReptileFeeding feeding)
        {
            throw new NotImplementedException();
        }

        public Response? UpdateReptileInfoEntity(ReptileInfo info)
        {
            throw new NotImplementedException();
        }

        public Response? UpdateReptileMeasure(Reptile reptile, ReptileMeasures measure)
        {
            throw new NotImplementedException();
        }

        public Response? UpdateReptileSkinChange(Reptile reptile, ReptileSkinChange skinChange)
        {
            throw new NotImplementedException();
        }
    }
}