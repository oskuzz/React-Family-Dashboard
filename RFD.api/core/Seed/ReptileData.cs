using System.Security.Cryptography;
using Azure.Data.Tables;
using RFD.API.Interface.Entities;
using RFD.API.Interface.Managers;
using RFD.API.Interface.Seed;
using RFD.API.Models;
using RFD.API.Models.Managers;

namespace RFD.API.Seed.Data
{
    public class GeneratePartitionKeyArgs
    {
        public required string TableName { get; set; }
        public required string Partition { get; set; }
        public bool IsValid()
        {
            return !string.IsNullOrWhiteSpace(TableName) &&
            !string.IsNullOrWhiteSpace(Partition);
        }
    }

    public class GenerateRowKeyArgs
    {
        public required string key1 { get; set; }
        public required string key2 { get; set; }
        public required string key3 { get; set; }
        public bool IsValid()
        {
            return !string.IsNullOrWhiteSpace(key1) &&
            !string.IsNullOrWhiteSpace(key2) &&
            !string.IsNullOrWhiteSpace(key3);
        }
    }
    public class SeedReptileData : ISeedReptileData
    {
        private readonly string TableName = "Reptiles";
        private string Partition { get; set; } = "";
        private readonly ITableStorageManager _tableStorageManager;
        public SeedReptileData(ITableStorageManager tableStorageManager)
        {
            _tableStorageManager = tableStorageManager;
        }
        public void Seed()
        {
            SeedReptile();
            SeedReptileInfo();
        }

        private string GenerateRowKey(GenerateRowKeyArgs args)
        {
            if (!args.IsValid())
            {
                throw new ArgumentException("Parameter 'GenerateRowKeyArgs' is InValid");
            }

            return $@"{args.key1}-{args.key2}-{args.key3}";
        }

        private string GeneratePartitionKey(GeneratePartitionKeyArgs args)
        {
            if (!args.IsValid())
            {
                throw new ArgumentException("Parameter 'GeneratePartitionKeyArgs' is InValid");
            }

            return $@"{args.TableName} - {args.Partition}";
        }

        private void SeedReptile()
        {
            Partition = "Reptile";

            Reptile reptile = new()
            {
                ReptileId = 1,
                Name = "Lusifer",
                Nickname = "Lusse",
                Gender = "Female",
                Birthday = DateTime.Parse("2020-06-01").ToUniversalTime(),
                Img = "@/app/ui/assets/images/Lusse_The_Sanke.jpeg",
                ReptileSpecies = "Viljakäärme",
                Description = "Lusse on meidän ensimmäinen herppi. Vilkas ja utelias tapaus.",
                Genes = SeedReptileGeneMap(),
                Terrarium = SeedReptileTerrarium()
            };

            reptile.PartitionKey = GeneratePartitionKey(new()
            {
                TableName = TableName,
                Partition = Partition
            });

            reptile.RowKey = GenerateRowKey(new()
            {
                key1 = reptile.Gender,
                key2 = reptile.ReptileSpecies,
                key3 = reptile.Name
            });

            _tableStorageManager.AddValuesAsync(new TableStorageManagerArgs.Add<Reptile>()
            {
                TableName = "Reptiles",
                Entity = reptile
            });
        }

        private List<ReptileGeneMap> SeedReptileGeneMap()
        {
            return new List<ReptileGeneMap>(){
                new ()
                {
                    Gene = "Ghost",
                    Color = "Gray"
                }
            };
        }

        private ReptileTerrarium SeedReptileTerrarium()
        {
            return new()
            {
                Size = "90x45x45cm",
                HeatingElements = ["Lämpölamppu"],
                OtherAccessories = ["UV lamppu", "Vesiastia"],
                IdealTemperature = 30
            };
        }

        private void SeedReptileInfo()
        {
            Partition = "ReptileInformation";

            ReptileInfo reptileInfo = new()
            {
                ReptileId = 1,
                Name = "Lusifer",
                Gender = "Female",
                ReptileSpecies = "Viljakäärme",
                Measures = SeedReptileMeasures(),
                Feeding = SeedReptileFeeding(),
                SkinChange = SeedReptileSkinChange(),
                Breeding = SeedReptileBreeding()
            };

            reptileInfo.PartitionKey = GeneratePartitionKey(new()
            {
                TableName = TableName,
                Partition = Partition
            });

            reptileInfo.RowKey = GenerateRowKey(new()
            {
                key1 = reptileInfo.Gender,
                key2 = reptileInfo.ReptileSpecies,
                key3 = reptileInfo.Name
            });

            _tableStorageManager.AddValuesAsync(new TableStorageManagerArgs.Add<ReptileInfo>()
            {
                TableName = "Reptiles",
                Entity = reptileInfo
            });

        }

        private List<ReptileMeasures> SeedReptileMeasures()
        {
            return new(){
                new(){
                    Date = DateTime.Parse("2023-12-03").ToUniversalTime(),
                    Weight = 218,
                    Height = null
                },
                new(){
                    Date = DateTime.Parse("2024-02-22").ToUniversalTime(),
                    Weight = 280,
                    Height = null
                },
                new(){
                    Date = DateTime.Parse("2024-04-08").ToUniversalTime(),
                    Weight = 287,
                    Height = null
                },
                new(){
                    Date = DateTime.Parse("2024-09-29").ToUniversalTime(),
                    Weight = 365,
                    Height = null
                },
            };
        }

        private List<ReptileFeeding> SeedReptileFeeding()
        {
            return new(){
                new(){
                    Date = DateTime.Parse("2024-10-20").ToUniversalTime(),
                    Type = "Hiiri",
                    Size = 35
                }
            };
        }

        private List<ReptileSkinChange> SeedReptileSkinChange()
        {
            return new(){
                new(){
                    Date = DateTime.Parse("2024-10-14").ToUniversalTime(),
                    Quality = "Normaali"
                }
            };
        }

        private List<ReptileBreeding>? SeedReptileBreeding()
        {
            return null;
        }
    }
}