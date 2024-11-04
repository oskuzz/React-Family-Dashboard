using Azure.Data.Tables;
using RFD.API.Interface.Managers;
using RFD.API.Interface.Entities;

namespace RFD.API.Models.Managers
{
    public class TableStorageManagerArgs : ITableStorageManagerArgs
    {
        public class Get : ITableStorageManagerArgs.Get
        {
            public required string TableName { get; set; }
            public required string PartitionKey { get; set; }
            public required string RowKey { get; set; }
            public bool IsValid()
            {
                return !string.IsNullOrWhiteSpace(TableName) && !string.IsNullOrWhiteSpace(PartitionKey) && !string.IsNullOrWhiteSpace(RowKey);
            }
        }
        public class Add<T> : ITableStorageManagerArgs.Add<T>
            where T : ITableEntity, ITableEntityBase, new()
        {
            public required string TableName { get; set; }
            public required T Entity { get; set; }
            public bool IsValid()
            {
                return !string.IsNullOrWhiteSpace(TableName) && Entity.IsValid();
            }
        }
        public class Update<T> : ITableStorageManagerArgs.Update<T>
            where T : ITableEntity, ITableEntityBase, new()
        {
            public required string TableName { get; set; }
            public required T Entity { get; set; }
            public bool IsValid()
            {
                return !string.IsNullOrWhiteSpace(TableName) && Entity.IsValid();
            }
        }
        public class Delete : ITableStorageManagerArgs.Delete
        {
            public required string TableName { get; set; }
            public required string PartitionKey { get; set; }
            public required string RowKey { get; set; }
            public bool IsValid()
            {
                return !string.IsNullOrWhiteSpace(TableName) && !string.IsNullOrWhiteSpace(PartitionKey) && !string.IsNullOrWhiteSpace(RowKey);
            }
        }
    }
}