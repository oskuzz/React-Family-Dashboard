using RFD.API.Models;

namespace RFD.API.Managers
{
    public class ReptileManager
    {
        private readonly IConfiguration _configuration;
        public ReptileManager(IConfiguration configuration)
        {
            _configuration = configuration;
        }
        public (Reptile?, ReptileInfo?) getReptileData(int reptileId)
        {

            return (null, null);
        }
    }
}