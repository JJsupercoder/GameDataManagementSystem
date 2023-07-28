using GameDataAPI.Models;
using Microsoft.EntityFrameworkCore;

namespace GameDataAPI.Data
{
    public class GameDataDbContext : DbContext
    {
        public GameDataDbContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<GameData> GameData { get; set; }
        public DbSet<Credentials> Credentials { get; set; }
    }
}
