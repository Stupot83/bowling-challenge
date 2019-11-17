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

  it('should be able to bowl', () => {
    let frame = jasmine.createSpyObj(Frame, ['playerTurn']);
    player.bowl(4, frame);
    expect(frame.playerTurn).toHaveBeenCalled();
  });

  it('should know how many pins were knocked down on the players turn', () => {
    let frame = jasmine.createSpyObj(Frame, ['playerTurn']);
    player.bowl(4, frame);
    expect(frame.playerTurn).toHaveBeenCalledWith(4);
  });
});