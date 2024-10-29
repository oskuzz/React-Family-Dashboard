using System.ComponentModel.DataAnnotations;

namespace RDF.API.Models
{
    public class Reptile
    {
        public int reptileId { get; set; }
        public required string name { get; set; }
        public string? nickname { get; set; }
        public DateTime? birthday { get; set; }
        public string? img { get; set; }
        public string? reptileSpecies { get; set; }
        public string? description { get; set; }
        public List<ReptileGeneMap>? genes { get; set; }
        public ReptileTerrarium? terrarium { get; set; }
    }

    public class ReptileGeneMap{
        public required string gene {get; set;}
        public string? color {get; set;}
    }

    public class ReptileTerrarium{
        public required string size {get; set;}
        public List<string>? heatingElements {get; set;}
        public List<string>? otherAccessories {get; set;}
        public int? idealTemperature {get; set;}
    }
}
