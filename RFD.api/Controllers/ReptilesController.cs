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
        public ReptilesController(IReptileManager reptileManager)
        {
            _reptileManager = reptileManager;
        }

        [HttpGet("GetReptile")]
        public async Task<Reptile?> GetReptile([FromBody] ReptileEntityArgs args)
        {
            return await _reptileManager.GetReptileEntityAsync(args);
        }

        [HttpGet("GetReptileInfo")]
        public async Task<ReptileInfo?> GetReptileInfo([FromBody] ReptileEntityArgs args)
        {
            return await _reptileManager.GetReptileInfoAsync(args);
        }
    }
}