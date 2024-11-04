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
        public Response? AddReptileEntity(Reptile reptile);
        public Response? AddReptileTerrarium(Reptile reptile, ReptileTerrarium terrarium);
        public Response? AddReptileGene(Reptile reptile, ReptileGeneMap GeneMap);
        public Response? AddReptileInfoEntity(ReptileInfo info);
        public Response? AddReptileMeasure(Reptile reptile, ReptileMeasures measure);
        public Response? AddReptileFeeding(Reptile reptile, ReptileFeeding feeding);
        public Response? AddReptileSkinChange(Reptile reptile, ReptileSkinChange skinChange);
        public Response? AddReptileBreeding(Reptile female, Reptile male, ReptileBreeding breeding);

        //Update methods
        public Response? UpdateReptileEntity(Reptile reptile);
        public Response? UpdateReptileInfoEntity(ReptileInfo info);
        public Response? UpdateReptileMeasure(Reptile reptile, ReptileMeasures measure);
        public Response? UpdateReptileFeeding(Reptile reptile, ReptileFeeding feeding);
        public Response? UpdateReptileSkinChange(Reptile reptile, ReptileSkinChange skinChange);
        public Response? UpdateReptileBreeding(Reptile female, Reptile male, ReptileBreeding breeding);

        //Delete methods
        public Response? RemoveReptileEntity(Reptile reptile);
        public Response? RemoveReptileInfoEntity(ReptileInfo info);
        public Response? RemoveReptileMeasure(Reptile reptile, ReptileMeasures measure);
        public Response? RemoveReptileFeeding(Reptile reptile, ReptileFeeding feeding);
        public Response? RemoveReptileSkinChange(Reptile reptile, ReptileSkinChange skinChange);
        public Response? RemoveReptileBreeding(Reptile female, Reptile male, ReptileBreeding breeding);
    }
}