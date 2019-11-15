class FinalFrame extends Frame {
  constructor() {
    super();
    this.finalFrame = true;
    this.turnThree = null;
  }

  playerTurn(pinsdown) {
    this.checkTurns(pinsdown);
    this.frameUpdate(pinsdown);
    this.numberOfTurns++;
  }

  checkTurns(pinsdown) {
    if ( this.spareOrStrikeThreeTurns() || this.notSpareOrStrikeTwoTurns() )  { 
      throw new Error ("Three turns is cheating!"); 
    }
  }

  spareOrStrikeThreeTurns() {
    return ((this.spareScored() || this.strikeScored()) && this.numberOfTurns === 3);
  }

  notSpareOrStrikeTwoTurns() {
    return ((!this.strikeScored() && !this.spareScored()) && this.numberOfTurns === 2);
  }
}