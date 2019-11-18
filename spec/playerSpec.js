describe('Player', () => {

  let player;

  beforeEach(() => {
    player = new Player();
  });

  it("instantiates the Player class successfully", () => {
    expect(player).toBeInstanceOf(Player);
  });

  it("is an object when created", () => {
    expect(typeof player).toEqual("object");
  });

  it("responds to bowl", () => {
    expect(typeof player.bowl).toEqual("function");
  });
});