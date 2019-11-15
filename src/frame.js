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

  spareScored() {
    if (((this.turnOne + this.turnTwo) === 10) && this.turnTwo !== null) {
      return true;
    }
    else if (((this.turnOne + this.turnTwo) !== 10) && this.turnTwo !== null) {
      return false;
    }
    else if (this.turnOne === null) {
      return false;
    }
    else if (((this.turnOne) !==10) && this.turnTwo === null) {
      return false;
    }
  }
}