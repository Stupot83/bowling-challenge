class Player {
  constructor(game) {
    this._game = game;
  }

  bowl(pinsdown) {
    parseInt(this._game.currentFrame.playerTurn(pinsdown), 10);
  }
}