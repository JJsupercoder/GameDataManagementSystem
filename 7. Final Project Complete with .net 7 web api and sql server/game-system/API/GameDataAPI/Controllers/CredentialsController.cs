using GameDataAPI.Data;
using GameDataAPI.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace GameDataAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CredentialsController : Controller
    {
        private readonly GameDataDbContext credentialsDbContext;
        public CredentialsController(GameDataDbContext credentialsDbContext)
        {
            this.credentialsDbContext = credentialsDbContext;
        }

        // Get all Credentials
        [HttpGet]
        public async Task<IActionResult> GetAllCredentials()
        {
            var credentials = await credentialsDbContext.Credentials.ToListAsync();
            return Ok(credentials);
        }

        // Get a single Credential
        [HttpGet]
        [Route("{id:guid}")]
        [ActionName("GetCredential")]
        public async Task<IActionResult> GetCredential([FromRoute] Guid id)
        {
            var credential = await credentialsDbContext.Credentials.FirstOrDefaultAsync(x => x.id == id);
            if (credential != null)
            {
                return Ok(credential);
            }
            return NotFound("Credentials not found!");
        }

        // Add a Credential
        [HttpPost]
        public async Task<IActionResult> AddCredential([FromBody] Credentials credential)
        {
            credential.id = Guid.NewGuid();
            await credentialsDbContext.Credentials.AddAsync(credential);
            await credentialsDbContext.SaveChangesAsync();

            return CreatedAtAction(nameof(GetCredential), new { id = credential.id }, credential);
        }

        // Delete a credential
        [HttpDelete]
        [Route("{id:guid}")]
        public async Task<IActionResult> DeleteCredential([FromRoute] Guid id)
        {
            var existingCredential = await credentialsDbContext.Credentials.FirstOrDefaultAsync(x => x.id == id);
            if (existingCredential != null)
            {
                credentialsDbContext.Credentials.Remove(existingCredential);
                await credentialsDbContext.SaveChangesAsync();
                return Ok(existingCredential);
            }
            return NotFound("Credentials not found!");
        }
    }
}

