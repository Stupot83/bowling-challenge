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

      it('should always start with ten pins', () => {
        expect(frame.totalPins).toEqual(10);
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
  });

})();