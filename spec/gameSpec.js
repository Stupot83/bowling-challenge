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

      it("responds to pointsTotal", () => {
        expect(typeof game.pointsTotal).toEqual("function");
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

      describe("Calculating scores", () => {

        beforeEach(() => {
          game.setupGame(Frame);
        });

        fdescribe('calculating scores when spares or strikes are scored or final frame', () => {
          it('should update the pointsTotal on next frame if a spare is scored', () => {
            game.frames[0].playerTurn(5);
            game.frames[0].playerTurn(5);
            game.frames[1].playerTurn(6);
            game.frames[1].playerTurn(3);
            game.updatePointsWithBonus();
            expect(game.frames[0].points).toEqual(16);
            expect(game.pointsTotal()).toEqual(25);
          });
        
          it('should update the pointsTotal on next frame if a strike is scored', () => {
            game.frames[0].playerTurn(10);
            game.frames[1].playerTurn(6);
            game.frames[1].playerTurn(3);
            game.updatePointsWithBonus();
            expect(game.frames[0].points).toEqual(19);
            expect(game.pointsTotal()).toEqual(28);
          });
        
          it('should update the pointsTotal on next frame with two strikes in a row', () => {
            game.frames[0].playerTurn(10);
            game.frames[1].playerTurn(10);
            game.frames[2].playerTurn(10);
            game.updatePointsWithBonus();
            expect(game.frames[0].points).toEqual(30);
            expect(game.pointsTotal()).toEqual(60);
          });
        
          it('should update the pointsTotal when there is a strike in frames 9 and 10', () => {
            game.frames[8].playerTurn(10);
            game.frames[9].playerTurn(10);
            game.frames[9].playerTurn(5);
            game.frames[9].playerTurn(5);
            game.updatePointsWithBonus();
            expect(game.frames[8].points).toEqual(25);
            expect(game.pointsTotal()).toEqual(25);
          });
        
          it('should update the pointsTotal when there is a spare in final frame', () => {
            game.frames[9].playerTurn(5);
            game.frames[9].playerTurn(5);
            game.frames[9].playerTurn(6);
            game.updatePointsWithBonus();
            expect(game.frames[9].points).toEqual(16);
            expect(game.pointsTotal()).toEqual(16);
          });
        
          it('should update the pointsTotal for final frame when no strikes/spares', () => {
            game.frames[9].playerTurn(5);
            game.frames[9].playerTurn(3);
            game.updatePointsWithBonus();
            expect(game.frames[9].points).toEqual(8);
            expect(game.pointsTotal()).toEqual(8);
          });
        
          it('should work for a full game with strikes/spares', () => {
            game.frames[0].playerTurn(1);
            game.frames[0].playerTurn(4);
            game.frames[1].playerTurn(4);
            game.frames[1].playerTurn(5);
            game.frames[2].playerTurn(6);
            game.frames[2].playerTurn(4);
            game.frames[3].playerTurn(5);
            game.frames[3].playerTurn(5);
            game.frames[4].playerTurn(10);
            game.frames[5].playerTurn(0);
            game.frames[5].playerTurn(1);
            game.frames[6].playerTurn(7);
            game.frames[6].playerTurn(3);
            game.frames[7].playerTurn(6);
            game.frames[7].playerTurn(4);
            game.frames[8].playerTurn(10);
            game.frames[9].playerTurn(2);
            game.frames[9].playerTurn(8);
            game.frames[9].playerTurn(6);
            game.updatePointsWithBonus();
            expect(game.pointsTotal()).toEqual(133);
          });
        
          it('should work for a perfect game', () => {
            game.frames[0].playerTurn(10);
            game.frames[1].playerTurn(10);
            game.frames[2].playerTurn(10);
            game.frames[3].playerTurn(10);
            game.frames[4].playerTurn(10);
            game.frames[5].playerTurn(10);
            game.frames[6].playerTurn(10);
            game.frames[7].playerTurn(10);
            game.frames[8].playerTurn(10);
            game.frames[9].playerTurn(10);
            game.frames[9].playerTurn(10);
            game.frames[9].playerTurn(10);
            game.updatePointsWithBonus();
            
            expect(game.pointsTotal()).toEqual(300);
          });
        });
      });
    });
  });

})();