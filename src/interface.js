$(document).ready(() => {
  let game = new Game();
  let player = new Player(game);

  game.setupGame(Frame);

  console.log(game);

  const setPoints = () =>{
    $('#frame-1-points-1').html(game.frames[0].turnOne);
    $('#frame-1-points-2').html(game.frames[0].turnTwo);
    $('#frame-2-points-1').html(game.frames[1].turnOne);
    $('#frame-2-points-2').html(game.frames[1].turnTwo);
    $('#frame-3-points-1').html(game.frames[2].turnOne);
    $('#frame-3-points-2').html(game.frames[2].turnTwo);
    $('#frame-4-points-1').html(game.frames[3].turnOne);
    $('#frame-4-points-2').html(game.frames[3].turnTwo);
    $('#frame-5-points-1').html(game.frames[4].turnOne);
    $('#frame-5-points-2').html(game.frames[4].turnTwo);
    $('#frame-6-points-1').html(game.frames[5].turnOne);
    $('#frame-6-points-2').html(game.frames[5].turnTwo);
    $('#frame-7-points-1').html(game.frames[6].turnOne);
    $('#frame-7-points-2').html(game.frames[6].turnTwo);
    $('#frame-8-points-1').html(game.frames[7].turnOne);
    $('#frame-8-points-2').html(game.frames[7].turnTwo);
    $('#frame-9-points-1').html(game.frames[8].turnOne);
    $('#frame-9-points-2').html(game.frames[8].turnTwo);
    $('#frame-10-points-1').html(game.frames[9].turnOne);
    $('#frame-10-points-2').html(game.frames[9].turnTwo);
    $('#frame-10-points-3').html(game.frames[9].turnThree);

    $('#frame1').html((parseInt(game.frames[0].turnOne, 10)) + (parseInt(game.frames[0].turnTwo, 10)));
    $('#frame2').html((parseInt(game.frames[1].turnOne, 10)) + (parseInt(game.frames[0].turnTwo, 10)));
    $('#frame3').html((parseInt(game.frames[2].turnOne, 10)) + (parseInt(game.frames[0].turnTwo, 10)));
    $('#frame4').html((parseInt(game.frames[3].turnOne, 10)) + (parseInt(game.frames[0].turnTwo, 10)));
    $('#frame5').html((parseInt(game.frames[4].turnOne, 10)) + (parseInt(game.frames[0].turnTwo, 10)));
    $('#frame6').html((parseInt(game.frames[5].turnOne, 10)) + (parseInt(game.frames[0].turnTwo, 10)));
    $('#frame7').html((parseInt(game.frames[6].turnOne, 10)) + (parseInt(game.frames[0].turnTwo, 10)));
    $('#frame8').html((parseInt(game.frames[7].turnOne, 10)) + (parseInt(game.frames[0].turnTwo, 10)));
    $('#frame9').html((parseInt(game.frames[8].turnOne, 10)) + (parseInt(game.frames[0].turnTwo, 10)));
    $('#frame10').html((parseInt(game.frames[0].turnOne, 10)) + (parseInt(game.frames[0].turnTwo, 10)) + (parseInt(game.frames[0].turnThree, 10)));
  };

  $('#btn0').on('click', () => {
    event.preventDefault();
    var points = $('#btn0').val();
    player.bowl(points);
    console.log(game);
    setPoints();
  });

  $('#btn1').on('click', () => {
    event.preventDefault();
    var points = $('#btn1').val();
    player.bowl(points, game.frames[0]);
    console.log(game);
    setPoints();
  });

  $('#btn2').on('click', () => {
    event.preventDefault();
    var points = $('#btn2').val();
    player.bowl(points, game.frames[0]);
    console.log(game);
    setPoints();
  });

  $('#btn3').on('click', () => {
    event.preventDefault();
    var points = $('#btn3').val();
    player.bowl(points, game.frames[0]);
    console.log(game);
    setPoints();
  });

  $('#btn4').on('click', () => {
    event.preventDefault();
    var points = $('#btn4').val();
    player.bowl(points, game.frames[0]);
    console.log(game);
    setPoints();
  });

  $('#btn5').on('click', () => {
    event.preventDefault();
    var points = $('#btn5').val();
    player.bowl(points, game.frames[0]);
    console.log(game);
    setPoints();
  });

  $('#btn6').on('click', () => {
    event.preventDefault();
    var points = $('#btn6').val();
    player.bowl(points, game.frames[0]);
    console.log(game);
    setPoints();
  });

  $('#btn7').on('click', () => {
    event.preventDefault();
    var points = $('#btn7').val();
    player.bowl(points, game.frames[0]);
    console.log(game);
    setPoints();
  });

  $('#btn8').on('click', () => {
    event.preventDefault();
    var points = $('#btn8').val();
    player.bowl(points, game.frames[0]);
    console.log(game);
    setPoints();
  });

  $('#btn9').on('click', () => {
    event.preventDefault();
    var points = $('#btn9').val();
    player.bowl(points, game.frames[0]);
    console.log(game);
    setPoints();
  });

  $('#btn10').on('click', () => {
    event.preventDefault();
    var points = $('#btn10').val();
    player.bowl(points, game.frames[0]);
    console.log(game);
    setPoints();
  });

});