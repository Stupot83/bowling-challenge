(function () {
  "use strict";

  describe("Frame", () => {

    describe("Frame initialisation", () => {
      let frame = new Frame();

      it("instantiates the Frame class successfully", () => {
        expect(frame).toBeInstanceOf(Frame);
      });

      it("is an object when created", () => {
        expect(typeof frame).toEqual("object");
      });
    });
  });

})();