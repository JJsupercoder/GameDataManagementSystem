export class GameData {
  id!: number;
  gameName!: string;
  gameTitle!: string;
  cdCost!: number;
  gameType!: string;
  gameRating!: number;
  creatorEmail!: string;

  // constructor(
  //   id: number,
  //   gameName: string,
  //   gameTitle: string,
  //   cdCost: number,
  //   gameType: string,
  //   gameRating: number,
  //   creatorEmail: string
  // ) {
  //   this.id = id;
  //   this.gameName = gameName;
  //   this.gameTitle = gameTitle;
  //   this.cdCost = cdCost;
  //   this.gameType = gameType;
  //   this.gameRating = gameRating;
  //   this.creatorEmail = creatorEmail;
  // }

  //unused
  //change to constructor
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

  //not modified yet
  copyObjectDetails(fromGameDataObject: GameData) {
    this.id = fromGameDataObject.id;
    this.gameName = fromGameDataObject.gameName;
    this.gameTitle = fromGameDataObject.gameTitle;
    this.cdCost = fromGameDataObject.cdCost;
    this.gameType = fromGameDataObject.gameType;
    this.gameRating = fromGameDataObject.gameRating;
    this.creatorEmail = fromGameDataObject.creatorEmail;
  }
}
