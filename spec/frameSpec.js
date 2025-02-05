(function () {
  "use strict";

  describe("Frame", () => {
    let frame;

    beforeEach(() => {
      frame = new Frame();
    });

    describe("Frame initialisation", () => {
      it("instantiates the Frame class successfully", () => {
        expect(frame).toBeInstanceOf(Frame);
      });

      it("is an object when created", () => {
        expect(typeof frame).toEqual("object");
      });

      it("has an attribute of totalPins ", () => {
        expect(typeof frame.totalPins).toEqual("number");
      });

      it("has an attribute of playerTurn", () => {
        expect(typeof frame.numberOfTurns).toEqual("number");
      });

      it("has an attribute of turnOne", () => {
        expect(typeof frame.turnOne).toEqual("object");
      });

      it("has an attribute of turnTwo", () => {
        expect(typeof frame.turnTwo).toEqual("object");
      });

      it("has an attribute of points", () => {
        expect(typeof frame.points).toEqual("number");
      });

      it("should always start with ten pins", () => {
        expect(frame.totalPins).toEqual(10);
      });

      it("should always start with numberOfTurns at 0", () => {
        expect(frame.numberOfTurns).toEqual(0);
      });

      it("should always start with turnOne as null", () => {
        expect(frame.turnOne).toEqual(null);
      });

      it("should always start with turnTwo as null", () => {
        expect(frame.turnTwo).toEqual(null);
      });

      it("should always start with points at 0", () => {
        expect(frame.points).toEqual(0);
      });
    });

    describe("Frame can update number of pins left", () => {
      it("responds to playerTurn", () => {
        expect(typeof frame.playerTurn).toEqual("function");
      });

      it("players turn updates totalpins", () => {
        frame.playerTurn(6);
        expect(frame.totalPins).toEqual(4);
      });
    });

    describe("Frame should only have two turns per player", () => {

      it("responds to isTurnLegal", () => {
        expect(typeof frame.isTurnLegal).toEqual("function");
      });

      it("responds to frameUpdate", () => {
        expect(typeof frame.frameUpdate).toEqual("function");
      });

      it("numberOfTurns updates", () => {
        frame.playerTurn(6);
        expect(frame.numberOfTurns).toEqual(1);
      });

      it("numberOfTurns updates after two turns", () => {
        frame.playerTurn(6);
        frame.playerTurn(3);
        expect(frame.numberOfTurns).toEqual(2);
      });

      it("players cannot have more than two turns", () => {
        frame.playerTurn(6);
        frame.playerTurn(3);
        expect(() => {
          frame.playerTurn(6);
        }).toThrow(
          new Error("Three turns is cheating!")
        );
      });
    });

    describe("Frame can only have two scores totalling no more than ten points", () => {
      it("if score inputted exceeds ten, throw an error", () => {
        frame.playerTurn(7);
        expect(() => {
          frame.playerTurn(9);
        }).toThrow(
          new Error("Nice try but I don't think so!")
        );
      });
    });

    describe("Frame should know which turn has been played", () => {
      it("should recognise the first turn", () => {
        frame.playerTurn(6);
        expect(frame.turnOne).toEqual(6);
      });

      it("should recognise the second turn", () => {
        frame.playerTurn(6);
        frame.playerTurn(3);
        expect(frame.turnOne).toEqual(6);
        expect(frame.turnTwo).toEqual(3);
      });
    });

    describe("Should keep a track of the players points", () => {
      it("should track points from turn one", () => {
        frame.playerTurn(6);
        expect(frame.points).toEqual(6);
      });

      it("should accumulate points after two turns", () => {
        frame.playerTurn(6);
        frame.playerTurn(3);
        expect(frame.points).toEqual(9);
      });
    });

    describe("Should be able to handle a spare being scored", () => {
      it("responds to spareScored", () => {
        expect(typeof frame.spareScored).toEqual("function");
      });

      it("should be false at start of a frame", () => {
        expect(frame.spareScored()).toEqual(false);
      });

      it("should be false after first turn", () => {
        frame.playerTurn(9);
        expect(frame.spareScored()).toEqual(false);
      });

      it ('should recognise a spare', () => {
        frame.playerTurn(9);
        frame.playerTurn(1);
        expect(frame.spareScored()).toEqual(true);
      });

      it ('should recognise when not a spare after two turns', () => {
        frame.playerTurn(8);
        frame.playerTurn(1);
        expect(frame.spareScored()).toEqual(false);
      });
    });

    describe("Should be able to handle a strike being scored", () => {
      it("responds to strikeScored", () => {
        expect(typeof frame.strikeScored).toEqual("function");
      });

      it("should be false at start of a frame", () => {
        expect(frame.strikeScored()).toEqual(false);
      });

      it ('should recognise a strike', () => {
        frame.playerTurn(10);
        expect(frame.strikeScored()).toEqual(true);
      });

      it ('should recognise as not a strike after two turns if first score is 0', () => {
        frame.playerTurn(0);
        frame.playerTurn(10);
        expect(frame.strikeScored()).toEqual(false);
      });

      it ('should recognise as not a strike after two turns if total is 10', () => {
        frame.playerTurn(4);
        frame.playerTurn(6);
        expect(frame.strikeScored()).toEqual(false);
      });
    });
  });
})();
