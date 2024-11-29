using Azure;
using Azure.Data.Tables;
using RFD.API.Managers;
using RFD.API.Models;

namespace RFD.API.Interface.Managers
{
    public interface IReptileManager
    {
        // Get methods
        public Task<IEnumerable<Reptile>?> GetAllReptileEntitiesAsync();
        public Task<IEnumerable<ReptileInfo>?> GetAllReptileInfoEntitiesAsync();
        public Task<Reptile?> GetReptileEntityAsync(ReptileEntityArgs args);
        public Task<ReptileInfo?> GetReptileInfoAsync(ReptileEntityArgs args);

        // Add methods
        public Task<Response?> AddReptileEntity(Reptile reptile);
        public Task<Response?> AddReptileTerrarium(Reptile reptile, ReptileTerrarium terrarium);
        public Task<Response?> AddReptileGene(Reptile reptile, ReptileGeneMap GeneMap);
        public Task<Response?> AddReptileInfoEntity(ReptileInfo info);
        public Task<Response?> AddReptileMeasure(Reptile reptile, ReptileMeasures measure);
        public Task<Response?> AddReptileFeeding(Reptile reptile, ReptileFeeding feeding);
        public Task<Response?> AddReptileSkinChange(Reptile reptile, ReptileSkinChange skinChange);
        public Task<Response?> AddReptileBreeding(Reptile female, Reptile male, ReptileBreeding breeding);

        //Update methods
        public Task<Response?> UpdateReptileEntity(Reptile reptile);
        public Task<Response?> UpdateReptileInfoEntity(ReptileInfo info);
        public Task<Response?> UpdateReptileMeasure(Reptile reptile, List<ReptileMeasures> measures);
        public Task<Response?> UpdateReptileFeeding(Reptile reptile, List<ReptileFeeding> feedings);
        public Task<Response?> UpdateReptileSkinChange(Reptile reptile, List<ReptileSkinChange> skinChanges);
        public Task<Response?> UpdateReptileBreeding(Reptile female, Reptile male, List<ReptileBreeding> breedings);

        //Delete methods
        public Task<Response?> RemoveReptileEntity(Reptile reptile);
        public Task<Response?> RemoveReptileInfoEntity(ReptileInfo info);
        public Task<Response?> RemoveReptileMeasure(Reptile reptile, ReptileMeasures measure);
        public Task<Response?> RemoveReptileFeeding(Reptile reptile, ReptileFeeding feeding);
        public Task<Response?> RemoveReptileSkinChange(Reptile reptile, ReptileSkinChange skinChange);
        public Task<Response?> RemoveReptileBreeding(Reptile female, Reptile male, ReptileBreeding breeding);
    }
}