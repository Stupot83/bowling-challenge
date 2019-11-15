(function () {
  "use strict";

  describe("Game", () => {
    let game;

    beforeEach(() => {
      game = new Game();
    });

    describe("Game initialisation", () => {
      it("instantiates the Game class successfully", () => {
        expect(game).toBeInstanceOf(Game);
      });

      it("is an object when created", () => {
        expect(typeof game).toEqual("object");
      });

      it("has an attribute of frames", () => {
        expect(typeof game.frames).toEqual("object");
      });

      it("starts with an empty frames array", () => {
        expect(game.frames).toEqual([]);
      });
    });

    describe("Tracking the number of frames", () => {
      it("responds to numberOfFramesPlayed", () => {
        expect(typeof game.numberOfFramesPlayed).toEqual("function");
      });

      it("starts with number of frames as 0", () => {
        expect(game.numberOfFramesPlayed()).toEqual(0);
      });
    });
  });

})();