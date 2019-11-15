class Frame {
  constructor() {
    this.totalPins = 10;
    this.numberOfTurns = 0;
    this.turnOne = null;
    this.turnTwo = null;
    this.points = 0;
  }

  playerTurn(pinsdown) {
    this.isTurnLegal(pinsdown);
    this.frameUpdate(pinsdown);
    this.numberOfTurns++;
  }

  isTurnLegal(pinsdown) {
    if (this.numberOfTurns === 2) {
      throw new Error("Three turns is cheating!");
    }
    if (this.totalPins - pinsdown < 0) {
      throw new Error("Nice try but I don't think so!");
    }
  }

  frameUpdate(pinsdown) {
    this.totalPins -= pinsdown;
    this.points += pinsdown;
    this.turnOne === null ? this.turnOne = pinsdown : this.turnTwo = pinsdown;
  }
}