(function() {
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

      it("responds to playerTurn", () => {
        expect(typeof frame.numberOfTurns).toEqual("number");
      });

      it("should always start with ten pins", () => {
        expect(frame.totalPins).toEqual(10);
      });

      it("should always start with numberOfTurns at 0", () => {
        expect(frame.numberOfTurns).toEqual(0);
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
  });
})();
