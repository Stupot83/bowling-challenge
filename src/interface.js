$(document).ready(() => {
  const game = new Game();
  game.setupGame(Frame);

  const player = new Player(game);

  console.log({ game });

  const setPoints = () => {
    $("#frame-1-points-1").html(game.frames[0].turnOne);
    $("#frame-1-points-2").html(game.frames[0].turnTwo);
    $("#frame-2-points-1").html(game.frames[1].turnOne);
    $("#frame-2-points-2").html(game.frames[1].turnTwo);
    $("#frame-3-points-1").html(game.frames[2].turnOne);
    $("#frame-3-points-2").html(game.frames[2].turnTwo);
    $("#frame-4-points-1").html(game.frames[3].turnOne);
    $("#frame-4-points-2").html(game.frames[3].turnTwo);
    $("#frame-5-points-1").html(game.frames[4].turnOne);
    $("#frame-5-points-2").html(game.frames[4].turnTwo);
    $("#frame-6-points-1").html(game.frames[5].turnOne);
    $("#frame-6-points-2").html(game.frames[5].turnTwo);
    $("#frame-7-points-1").html(game.frames[6].turnOne);
    $("#frame-7-points-2").html(game.frames[6].turnTwo);
    $("#frame-8-points-1").html(game.frames[7].turnOne);
    $("#frame-8-points-2").html(game.frames[7].turnTwo);
    $("#frame-9-points-1").html(game.frames[8].turnOne);
    $("#frame-9-points-2").html(game.frames[8].turnTwo);
    $("#frame-10-points-1").html(game.frames[9].turnOne);
    $("#frame-10-points-2").html(game.frames[9].turnTwo);
    $("#frame-10-points-3").html(game.frames[9].turnThree);

    $("#frame1").html(game.frames[0].points);
    $("#frame2").html(game.frames[0].points + game.frames[1].points);
    $("#frame3").html(
      game.frames[0].points + game.frames[1].points + game.frames[2].points
    );
    $("#frame4").html(
      game.frames[0].points +
        game.frames[1].points +
        game.frames[2].points +
        game.frames[3].points
    );
    $("#frame5").html(
      game.frames[0].points +
        game.frames[1].points +
        game.frames[2].points +
        game.frames[3].points +
        game.frames[4].points
    );
    $("#frame6").html(
      game.frames[0].points +
        game.frames[1].points +
        game.frames[2].points +
        game.frames[3].points +
        game.frames[4].points +
        game.frames[5].points
    );
    $("#frame7").html(
      game.frames[0].points +
        game.frames[1].points +
        game.frames[2].points +
        game.frames[3].points +
        game.frames[4].points +
        game.frames[5].points +
        game.frames[6].points
    );
    $("#frame8").html(
      game.frames[0].points +
        game.frames[1].points +
        game.frames[2].points +
        game.frames[3].points +
        game.frames[4].points +
        game.frames[5].points +
        game.frames[6].points +
        game.frames[7].points
    );
    $("#frame9").html(
      game.frames[0].points +
        game.frames[1].points +
        game.frames[2].points +
        game.frames[3].points +
        game.frames[4].points +
        game.frames[5].points +
        game.frames[6].points +
        game.frames[7].points +
        game.frames[8].points
    );
    $("#frame10").html(
      game.frames[0].points +
        game.frames[1].points +
        game.frames[2].points +
        game.frames[3].points +
        game.frames[4].points +
        game.frames[5].points +
        game.frames[6].points +
        game.frames[7].points +
        game.frames[8].points +
        game.frames[9].points
    );
  };

  $("#btn0").on("click", () => {
    event.preventDefault();
    let points = $("#btn0").val();
    player.bowl(points);
    game.updatePointsWithBonus();
    setPoints();
  });

  $("#btn1").on("click", () => {
    event.preventDefault();
    let points = $("#btn1").val();
    player.bowl(points);
    game.updatePointsWithBonus();
    setPoints();
  });

  $("#btn2").on("click", () => {
    event.preventDefault();
    let points = $("#btn2").val();
    player.bowl(points);
    game.updatePointsWithBonus();
    setPoints();
  });

  $("#btn3").on("click", () => {
    event.preventDefault();
    let points = $("#btn3").val();
    player.bowl(points);
    game.updatePointsWithBonus();
    setPoints();
  });

  $("#btn4").on("click", () => {
    event.preventDefault();
    let points = $("#btn4").val();
    player.bowl(points);
    game.updatePointsWithBonus();
    setPoints();
  });

  $("#btn5").on("click", () => {
    event.preventDefault();
    let points = $("#btn5").val();
    player.bowl(points);
    game.updatePointsWithBonus();
    setPoints();
  });

  $("#btn6").on("click", () => {
    event.preventDefault();
    let points = $("#btn6").val();
    player.bowl(points);
    game.updatePointsWithBonus();
    setPoints();
  });

  $("#btn7").on("click", () => {
    event.preventDefault();
    let points = $("#btn7").val();
    player.bowl(points);
    game.updatePointsWithBonus();
    setPoints();
  });

  $("#btn8").on("click", () => {
    event.preventDefault();
    let points = $("#btn8").val();
    player.bowl(points);
    game.updatePointsWithBonus();
    setPoints();
  });

  $("#btn9").on("click", () => {
    event.preventDefault();
    let points = $("#btn9").val();
    player.bowl(points);
    game.updatePointsWithBonus();
    setPoints();
  });

  $("#btn10").on("click", () => {
    event.preventDefault();
    let points = $("#btn10").val();
    player.bowl(points);
    game.updatePointsWithBonus();
    setPoints();
  });
});
