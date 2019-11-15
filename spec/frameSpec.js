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

      it('should always start with ten pins', () => {
        expect(frame.totalPins).toEqual(10);
      });
    });
  });

})();