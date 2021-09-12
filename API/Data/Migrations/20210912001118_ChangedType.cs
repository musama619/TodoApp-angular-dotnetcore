using Microsoft.EntityFrameworkCore.Migrations;

namespace API.Data.Migrations
{
    public partial class ChangedType : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "AddedByUserId",
                table: "Todos");

            migrationBuilder.AddColumn<string>(
                name: "AddedByUserName",
                table: "Todos",
                type: "nvarchar(max)",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "AddedByUserName",
                table: "Todos");

            migrationBuilder.AddColumn<int>(
                name: "AddedByUserId",
                table: "Todos",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }
    }
}
