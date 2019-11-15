class Game {
  constructor() {
    this.frames = [];
  }

  numberOfFramesPlayed() {
    return this.frames.length;
  }

  setupGame(element) {
    if (this.numberOfFramesPlayed() === 10) {
      throw new Error("Ten frames played, please start a new game");
    }

    for (let i = 0; i < 9; i++) {
      this.frames.push(new element);
    }

    this.frames.push(new FinalFrame());
  }

  pointsTotal() {
    let totalPoints = 0;
    for (let i = 0; i < this.numberOfFramesPlayed(); i++) {
      totalPoints += this.frames[i].points;
    }
    return totalPoints;
  }
}