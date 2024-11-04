namespace RFD.API.Managers.Tools
{
    public interface ITableStorageToolbox
    {
        public string GeneratePartitionKey(IEnumerable<string> keys);
        public string GenerateRowKey(IEnumerable<string> keys);
    }
}