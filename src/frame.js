class Frame {
  constructor() {
    this.totalPins = 10;
  }

  playerTurn(pinsdown) {
    this.totalPins -= pinsdown;
  }
}