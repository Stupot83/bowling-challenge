class Frame {
  constructor() {
    this.totalPins = 10;
    this.numberOfTurns = 0;
  }

  playerTurn(pinsdown) {
    this.isTurnLegal(pinsdown);
    this.frameUpdate(pinsdown);
    this.numberOfTurns++;
  }

  isTurnLegal() {
    if (this.numberOfTurns === 2) {
      throw new Error("Three turns is cheating!");
    }
  }

  frameUpdate(pinsdown) {
    this.totalPins -= pinsdown;
  }
}