using RFD.API.Interface.Managers;
using RFD.API.Interface.Seed;
using RFD.API.Managers;
using RFD.API.Managers.Tools;
using RFD.API.Seed.Data;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddSingleton<ITableStorageManager, TableStorageManager>();
builder.Services.AddSingleton<ITableStorageToolbox, TableStorageManager>();
builder.Services.AddSingleton<IReptileManager, ReptileManager>();
builder.Services.AddSingleton<ISeedReptileData, SeedReptileData>();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
