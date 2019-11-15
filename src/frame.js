class Frame {
  constructor() {
    this.totalPins = 10;
    this.numberOfTurns = 0;
  }

  playerTurn(pinsdown) {
    if (this.numberOfTurns === 2) {
      throw new Error("Three turns is cheating!");
    }
    
    this.totalPins -= pinsdown;
    this.numberOfTurns++;
  }
}