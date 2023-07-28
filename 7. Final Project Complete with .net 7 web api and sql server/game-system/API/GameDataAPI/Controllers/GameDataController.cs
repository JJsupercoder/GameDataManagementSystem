using GameDataAPI.Data;
using GameDataAPI.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace GameDataAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class GameDataController : Controller
    {
        private readonly GameDataDbContext gameDataDbContext;
        public GameDataController(GameDataDbContext gameDataDbContext)
        {
            this.gameDataDbContext = gameDataDbContext;
        }

        // Get all GameData
        [HttpGet]
        public async Task<IActionResult> GetAllGameDataRecords()
        {
            var gameData = await gameDataDbContext.GameData.ToListAsync();
            return Ok(gameData);
        }

        // Get a single GameData
        [HttpGet]
        [Route("{id:guid}")]
        [ActionName("GetGameDataRecord")]
        public async Task<IActionResult> GetGameDataRecord([FromRoute] Guid id)
        {
            var gameData = await gameDataDbContext.GameData.FirstOrDefaultAsync(x => x.id == id);
            if (gameData != null) 
            {
                return Ok(gameData);
            }
            return NotFound("Game Data Record not found!");
        }

        // Add a GameData
        [HttpPost]
        public async Task<IActionResult> AddGameDataRecord([FromBody] GameData gameData)
        {
            gameData.id = Guid.NewGuid();
            await gameDataDbContext.GameData.AddAsync(gameData);
            await gameDataDbContext.SaveChangesAsync();

            return CreatedAtAction(nameof(GetGameDataRecord), new { id = gameData.id }, gameData);
        }

        // Update a GameData
        [HttpPut]
        [Route("{id:guid}")]
        public async Task<IActionResult> UpdateGameDataRecord([FromRoute] Guid id, [FromBody] GameData gameData)
        {
            var existingGameData = await gameDataDbContext.GameData.FirstOrDefaultAsync(x => x.id == id);
            if (existingGameData != null)
            {
                existingGameData.gameName = gameData.gameName;  
                existingGameData.gameTitle = gameData.gameTitle;
                existingGameData.cdCost = gameData.cdCost;
                existingGameData.gameRating = gameData.gameRating;  
                existingGameData.creatorEmail = gameData.creatorEmail;  
                existingGameData.gameType = gameData.gameType;
                await gameDataDbContext.SaveChangesAsync();
                return Ok(existingGameData);
            }
            return NotFound("Game Data Record not found!");
        }

        // Delete a GameData
        [HttpDelete]
        [Route("{id:guid}")]
        public async Task<IActionResult> DeleteGameDataRecord([FromRoute] Guid id)
        {
            var existingGameData = await gameDataDbContext.GameData.FirstOrDefaultAsync(x => x.id == id);
            if (existingGameData != null)
            {
                gameDataDbContext.GameData.Remove(existingGameData);
                await gameDataDbContext.SaveChangesAsync();
                return Ok(existingGameData);
            }
            return NotFound("Game Data Record not found!");
        }

    }
}
