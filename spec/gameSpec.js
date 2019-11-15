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

        it('should keep a record of the pointsTotal as frames are played', () => {
          game.frames[0].playerTurn(6);
          game.frames[0].playerTurn(3);
          game.frames[1].playerTurn(6);
          game.frames[1].playerTurn(3);
          game.frames[2].playerTurn(0);
          game.frames[2].playerTurn(3);
          expect(game.pointsTotal()).toEqual(21);
        });

        it('should work out the pointsTotal for a full game without strikes/spares', () => {
          game.frames[0].playerTurn(6);
          game.frames[0].playerTurn(3);
          game.frames[1].playerTurn(6);
          game.frames[1].playerTurn(3);
          game.frames[2].playerTurn(6);
          game.frames[2].playerTurn(3);
          game.frames[3].playerTurn(6);
          game.frames[3].playerTurn(3);
          game.frames[4].playerTurn(6);
          game.frames[5].playerTurn(3);
          game.frames[5].playerTurn(6);
          game.frames[6].playerTurn(3);
          game.frames[6].playerTurn(6);
          game.frames[7].playerTurn(3);
          game.frames[7].playerTurn(6);
          game.frames[8].playerTurn(3);
          game.frames[9].playerTurn(6);
          game.frames[9].playerTurn(3);
          expect(game.pointsTotal()).toEqual(72);
        });
        
        it('should work out the pointsTotal for a gutter game', () => {
          game.frames[0].playerTurn(0);
          game.frames[0].playerTurn(0);
          game.frames[1].playerTurn(0);
          game.frames[1].playerTurn(0);
          game.frames[2].playerTurn(0);
          game.frames[2].playerTurn(0);
          game.frames[3].playerTurn(0);
          game.frames[3].playerTurn(0);
          game.frames[4].playerTurn(0);
          game.frames[4].playerTurn(0);
          game.frames[5].playerTurn(0);
          game.frames[5].playerTurn(0);
          game.frames[6].playerTurn(0);
          game.frames[6].playerTurn(0);
          game.frames[7].playerTurn(0);
          game.frames[7].playerTurn(0);
          game.frames[8].playerTurn(0);
          game.frames[8].playerTurn(0);
          game.frames[9].playerTurn(0);
          game.frames[9].playerTurn(0);
          expect(game.pointsTotal()).toEqual(0);
        });
      });
    });
  });

})();