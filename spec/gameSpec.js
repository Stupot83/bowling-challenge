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

      it("responds to setupGame", () => {
        expect(typeof game.setupGame).toEqual("function");
      });

      it("starts with number of frames as 0", () => {
        expect(game.numberOfFramesPlayed()).toEqual(0);
      });

      describe("Tracking the number of frames when game has started", () => {

        beforeEach(() => {
          game.setupGame(Frame);
        });

        it('should not allow more than 10 frames per game', () => {
          expect(() => {
            game.setupGame(Frame);
          }).toThrow(
            new Error("Ten frames played, please start a new game")
          );
        });

        it('should create a total of 10 frames per game', () => {
          expect(game.frames.length).toEqual(10);
          expect(game.numberOfFramesPlayed()).toEqual(10);
        });
      });
    });
  });

})();