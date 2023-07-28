using System.ComponentModel.DataAnnotations;

namespace GameDataAPI.Models
{
    public class GameData
    {
        [Key]   
        public Guid id { get; set; }
        public string gameName { get; set; } = string.Empty;
        public string gameType { get; set; } = string.Empty;
        public string creatorEmail { get; set; } = string.Empty;
        public string gameTitle { get; set; } = string.Empty;
        public int gameRating { get; set; } = 0;
        public int cdCost { get; set; } = 0;
    }
}
