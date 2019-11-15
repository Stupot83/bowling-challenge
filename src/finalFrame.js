class FinalFrame extends Frame {
  constructor() {
    super();
    this.finalFrame = true;
    this.turnThree = null;
  }

  playerTurn(pinsdown) {
    this.checkTurns(pinsdown);
    this.finalFrameUpdate(pinsdown);
    this.numberOfTurns++;
  }

  checkTurns(pinsdown) {
    if ( this.spareOrStrikeThreeTurns() || this.notSpareOrStrikeTwoTurns() )  { 
      throw new Error ("Three turns is cheating!"); 
    }
  }

  finalFrameUpdate(pinsdown) {
    this.reload(pinsdown);
    this.score += pinsdown;
    this.updateTurn(pinsdown);
  }

  spareOrStrikeThreeTurns() {
    return ((this.spareScored() || this.strikeScored()) && this.numberOfTurns === 3);
  }

  notSpareOrStrikeTwoTurns() {
    return ((!this.strikeScored() && !this.spareScored()) && this.numberOfTurns === 2);
  }

  reload(pinsdown) {
    if (pinsdown === 10 ) { 
      this.totalPins = 10; 
    } else if ( this.turnOne + this.turnTwo === 10 ) { 
      this.totalPins = 10;
    } else { 
      this.totalPins -= pinsdown; }
  }

  updateTurn(pinsdown) {
    this.turnOne === null ? this.turnOne = pinsdown : 
    this.turnTwo === null ? this.turnTwo = pinsdown : this.turnThree = pinsdown;
  }
}