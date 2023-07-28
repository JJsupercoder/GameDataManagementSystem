export class GameData {
  id!: number;
  gameName!: string;
  gameTitle!: string;
  cdCost!: number;
  gameType!: string;
  gameRating!: number;
  creatorEmail!: string;

  setGameDetails(
    id: number,
    gameName: string,
    gameTitle: string,
    cdCost: number,
    gameType: string,
    gameRating: number,
    creatorEmail: string
  ) {
    this.id = id;
    this.gameName = gameName;
    this.gameTitle = gameTitle;
    this.cdCost = cdCost;
    this.gameType = gameType;
    this.gameRating = gameRating;
    this.creatorEmail = creatorEmail;
  }
}
