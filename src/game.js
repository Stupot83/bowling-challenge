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

    for (var i = 0; i < 9; i++) {
      this.frames.push(new element);
    }

    this.frames.push(new FinalFrame());
  }
}