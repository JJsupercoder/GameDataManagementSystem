using System.ComponentModel.DataAnnotations;

namespace GameDataAPI.Models
{
    public class Credentials
    {
        [Key]   
        public Guid id { get; set; }
        public string userName { get; set; } = string.Empty;
        public string password { get; set; } = string.Empty;
        public string email { get; set; } = string.Empty;
    }
}
