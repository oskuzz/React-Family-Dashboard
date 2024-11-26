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

        // GET

        [HttpPost("GetReptile")]
        public async Task<Reptile?> GetReptile([FromBody] ReptileEntityArgs args)
        {
            return await _reptileManager.GetReptileEntityAsync(args);
        }

        [HttpPost("GetReptileInfo")]
        public async Task<ReptileInfo?> GetReptileInfo([FromBody] ReptileEntityArgs args)
        {
            return await _reptileManager.GetReptileInfoAsync(args);
        }

        // ADD
        [HttpPost("AddReptile")]
        public async Task<Response?> AddReptile([FromBody] Reptile entity)
        {
            return await _reptileManager.AddReptileEntity(entity);
        }

        [HttpPost("AddReptileMeasure")]
        public async Task<Response?> AddReptileMeasure([FromBody] ReptileMeasureEntityArgs args)
        {
            if(!args.IsValid()){
                throw new ArgumentException("Provided ReptileMeasureEntityArgs is Invalid");
            }
            return await _reptileManager.AddReptileMeasure(args.reptile, args.measure);
        }
    }
}