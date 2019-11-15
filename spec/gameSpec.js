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
  });

})();