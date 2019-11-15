(function () {
  "use strict";

  describe("FinalFrame", () => {
    let finalFrame;

    beforeEach(() => {
      finalFrame = new FinalFrame();
    });

    describe("FinalFrame initialisation", () => {
      it("instantiates the FinalFrame class successfully", () => {
        expect(finalFrame).toBeInstanceOf(FinalFrame);
      });

      it("is an object when created", () => {
        expect(typeof finalFrame).toEqual("object");
      });

      it("has an attribute of finalframe", () => {
        expect(typeof finalFrame.finalFrame).toEqual("boolean");
      });

      it("has an attribute of turnThree", () => {
        expect(typeof finalFrame.turnThree).toEqual("object");
      });

      it("should always start with turnThree as null", () => {
        expect(finalFrame.turnThree).toEqual(null);
      });
    });

    describe("FinalFrame can update number of pins left", () => {
      it("responds to playerTurn", () => {
        expect(typeof finalFrame.playerTurn).toEqual("function");
      });

      it("responds to checkTurns", () => {
        expect(typeof finalFrame.checkTurns).toEqual("function");
      });

      it("responds to spareOrStrikeThreeTurns", () => {
        expect(typeof finalFrame.spareOrStrikeThreeTurns).toEqual("function");
      });

      it("responds to notSpareOrStrikeTwoTurns", () => {
        expect(typeof finalFrame.notSpareOrStrikeTwoTurns).toEqual("function");
      });

      it("responds to finalFrameUpdate", () => {
        expect(typeof finalFrame.finalFrameUpdate).toEqual("function");
      });

      it("responds to reload", () => {
        expect(typeof finalFrame.reload).toEqual("function");
      });

      it("responds to updateTurn", () => {
        expect(typeof finalFrame.updateTurn).toEqual("function");
      });
    });

    describe("FinalFrame can handle the number of turns dependant on points scored", () => {
      it('should only allow 2 turns in final frame if no strike/spare', () => {
        finalFrame.playerTurn(6);
        finalFrame.playerTurn(3);
        expect(() => {
          finalFrame.playerTurn(6);
        }).toThrow(
          new Error("Three turns is cheating!")
        );
      });

      it ('should only allow 3 turns in final frame if there is a strike', () => {
        finalFrame.playerTurn(10);
        finalFrame.playerTurn(6);
        finalFrame.playerTurn(3);
        expect(() => {
          finalFrame.playerTurn(6);
        }).toThrow(
          new Error("Three turns is cheating!")
        );
      });

      it ('should only allow 3 turns in final frame if a spare is scored', () => {
        finalFrame.playerTurn(7);
        finalFrame.playerTurn(3);
        finalFrame.playerTurn(6);
        expect(() => {
          finalFrame.playerTurn(6);
        }).toThrow(
          new Error("Three turns is cheating!")
        );
      });
    });
  });
})();