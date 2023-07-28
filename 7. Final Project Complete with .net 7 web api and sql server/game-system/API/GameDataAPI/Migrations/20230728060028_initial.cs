using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace GameDataAPI.Migrations
{
    /// <inheritdoc />
    public partial class initial : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "GameData",
                columns: table => new
                {
                    id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    gameName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    gameType = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    creatorEmail = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    gameTitle = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    gameRating = table.Column<int>(type: "int", nullable: false),
                    cdCost = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_GameData", x => x.id);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "GameData");
        }
    }
}
