using Azure;
using Microsoft.AspNetCore.Mvc;
using RFD.API.Interface.Managers;
using RFD.API.Interface.Seed;
using RFD.API.Managers;
using RFD.API.Models;
using RFD.API.Models.Managers;

namespace RFD.API.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ReptilesController : ControllerBase
    {
        private IReptileManager _reptileManager;
        private ITableStorageManager _storageManager;
        private ISeedReptileData _seedReptileData;
        public ReptilesController(ITableStorageManager storageManager, ISeedReptileData seedReptileData, IReptileManager reptileManager)
        {
            _seedReptileData = seedReptileData;
            _storageManager = storageManager;
            _reptileManager = reptileManager;
        }

        [HttpGet("TestReptileManager")]
        public async Task<Reptile?> GetReptile([FromBody] ReptileEntityArgs args)
        {
            return await _reptileManager.GetReptileEntityAsync(args);
        }

        [HttpGet("TestReptileManager2")]
        public async Task<ReptileInfo?> GetReptileInfo([FromBody] ReptileEntityArgs args)
        {
            return await _reptileManager.GetReptileInfoAsync(args);
        }

        [HttpGet("AddTestReptile")]
        public async Task<int?> AddTestReptileAsync()
        {
            Reptile testModel = new Reptile()
            {
                Name = "Test",
                PartitionKey = "Reptile - Test",
                ReptileId = -1,
                RowKey = "Reptile - Test - 1"
            };

            TableStorageManagerArgs.Add<Reptile> args = new TableStorageManagerArgs.Add<Reptile>()
            {
                TableName = "Reptiles",
                Entity = testModel
            };

            var response = await _storageManager.AddValuesAsync(args);

            return response?.Status;
        }

        [HttpGet("RemoveTestReptile")]
        public async Task<int?> RemoveTestReptileAsync()
        {
            TableStorageManagerArgs.Delete args = new TableStorageManagerArgs.Delete()
            {
                TableName = "Reptiles",
                PartitionKey = "Reptile - Test",
                RowKey = "Reptile - Test - 1"
            };

            var response = await _storageManager.DeleteValuesAsync(args);

            return response?.Status;
        }

        [HttpGet("SeedReptileData")]
        public void SeedReptileData()
        {
            _seedReptileData.Seed();
        }

        [HttpGet("GetSeededReptileData")]
        public async Task<Reptile?> GetSeededReptileData()
        {
            return await _storageManager.GetValuesAsync<Reptile>(new TableStorageManagerArgs.Get()
            {
                TableName = "Reptiles",
                PartitionKey = "Reptiles - Reptile",
                RowKey = "Female-Viljakäärme-Lusifer"
            });
        }

        [HttpGet("GetSeededReptileInfoData")]
        public async Task<ReptileInfo?> GetSeededReptileInfoData()
        {
            return await _storageManager.GetValuesAsync<ReptileInfo>(new TableStorageManagerArgs.Get()
            {
                TableName = "Reptiles",
                PartitionKey = "Reptiles - ReptileInformation",
                RowKey = "Female-Viljakäärme-Lusifer"
            });
        }

        /* [HttpGet(Name = "GetReptile/{reptileId}")]
        public Reptile GetReptile(int _reptileId)
        {
            return new Reptile() { reptileId = 1, name = "jäbä" };
        }

        [HttpGet(Name = "GetReptileInfo/{reptileId}")]
        public ReptileInfo GetReptileInfo(int _reptileId)
        {
            return new ReptileInfo() { reptileId = 1 };
        } */
    }
}