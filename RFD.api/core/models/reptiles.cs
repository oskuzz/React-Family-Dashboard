using System.Runtime.Serialization;
using System.Text.Json;
using System.Text.Json.Serialization;
using Azure;
using Azure.Data.Tables;
using RFD.API.Interface.Entities;

namespace RFD.API.Models
{
    public class TableBase : ITableEntity
    {
        [JsonIgnore]
        public string? PartitionKey { get; set; }
        [JsonIgnore]
        public string? RowKey { get; set; }
        [JsonIgnore]
        public DateTimeOffset? Timestamp { get; set; }
        [JsonIgnore]
        public ETag ETag { get; set; }
    }

    public class Reptile : TableBase, ITableEntityBase
    {
        public int ReptileId { get; set; }
        public string? Name { get; set; }
        public string? Nickname { get; set; }
        public string? Gender { get; set; }
        public DateTime? Birthday { get; set; }
        public string? Img { get; set; }
        public string? ReptileSpecies { get; set; }
        public string? Description { get; set; }
        [JsonIgnore]
        public string? GenesJson
        {
            get => Genes == null ? null : JsonSerializer.Serialize(Genes);
            set => Genes = string.IsNullOrEmpty(value) ? null : JsonSerializer.Deserialize<List<ReptileGeneMap>>(value);
        }
        [IgnoreDataMember]
        public List<ReptileGeneMap>? Genes { get; set; }
        [JsonIgnore]
        public string? TerrariumJson
        {
            get => Terrarium == null ? null : JsonSerializer.Serialize(Terrarium);
            set => Terrarium = string.IsNullOrEmpty(value) ? null : JsonSerializer.Deserialize<ReptileTerrarium>(value);
        }
        [IgnoreDataMember]
        public ReptileTerrarium? Terrarium { get; set; }
        public bool IsValid()
        {
            return true;
        }
    }

    public class ReptileGeneMap : TableBase
    {
        public required string Gene { get; set; }
        public string? Color { get; set; }
    }

    public class ReptileTerrarium : TableBase
    {
        public required string Size { get; set; }
        public List<string>? HeatingElements { get; set; }
        public List<string>? OtherAccessories { get; set; }
        public int? IdealTemperature { get; set; }
    }

    public class ReptileInfo : TableBase, ITableEntityBase
    {
        public int ReptileId { get; set; }
        public string? Name { get; set; }
        public string? Gender { get; set; }
        public string? ReptileSpecies { get; set; }
        [JsonIgnore]
        public string? MeasuresJson
        {
            get => Measures == null ? null : JsonSerializer.Serialize(Measures);
            set => Measures = string.IsNullOrEmpty(value) ? null : JsonSerializer.Deserialize<List<ReptileMeasures>>(value);
        }
        [IgnoreDataMember]
        public List<ReptileMeasures>? Measures { get; set; }
        [JsonIgnore]
        public string? FeedingJson
        {
            get => Feeding == null ? null : JsonSerializer.Serialize(Feeding);
            set => Feeding = string.IsNullOrEmpty(value) ? null : JsonSerializer.Deserialize<List<ReptileFeeding>>(value);
        }
        [IgnoreDataMember]
        public List<ReptileFeeding>? Feeding { get; set; }
        [JsonIgnore]
        public string? SkinChangeJson
        {
            get => SkinChange == null ? null : JsonSerializer.Serialize(SkinChange);
            set => SkinChange = string.IsNullOrEmpty(value) ? null : JsonSerializer.Deserialize<List<ReptileSkinChange>>(value);
        }
        [IgnoreDataMember]
        public List<ReptileSkinChange>? SkinChange { get; set; }
        [JsonIgnore]
        public string? BreedingJson
        {
            get => Breeding == null ? null : JsonSerializer.Serialize(Breeding);
            set => Breeding = string.IsNullOrEmpty(value) ? null : JsonSerializer.Deserialize<List<ReptileBreeding>>(value);
        }
        [IgnoreDataMember]
        public List<ReptileBreeding>? Breeding { get; set; }
        public bool IsValid()
        {
            return true;
        }
    }

    public class ReptileMeasures : TableBase
    {
        public required DateTime Date { get; set; }
        public int? Weight { get; set; }
        public int? Height { get; set; }
    }

    public class ReptileFeeding : TableBase
    {
        public required DateTime Date { get; set; }
        public int? Size { get; set; }
        public string? Type { get; set; }
    }

    public class ReptileSkinChange : TableBase
    {
        public required DateTime Date { get; set; }
        public string? Quality { get; set; }
    }
    public class ReptileBreeding : TableBase
    {
        public required int PartnerId { get; set; }
        public required DateTime Date { get; set; }

    }
}
