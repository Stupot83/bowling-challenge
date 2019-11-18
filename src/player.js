class Player {
  constructor(game) {
    this._game = game;
  }

  bowl(pinsdown) {
    this._game.currentFrame.playerTurn(pinsdown);
  }
}