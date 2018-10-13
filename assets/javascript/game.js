$(document).ready(function () {
  var Random = Math.floor(Math.random() * 101 + 19)


  $('#randomNumber').text(Random);

  // Set up random numbers for each crystal
  var num1 = Math.floor(Math.random() * 11 + 1)
  var num2 = Math.floor(Math.random() * 11 + 1)
  var num3 = Math.floor(Math.random() * 11 + 1)
  var num4 = Math.floor(Math.random() * 11 + 1)

  //  Let's declare some variables
  var userTotal = 0;
  var wins = 0;
  var losses = 0;

  $('#numberWins').text(wins);
  $('#numberLosses').text(losses);

  //Restart the game
  function restart() {
    Random = Math.floor(Math.random() * 101 + 19);
    console.log(Random)
    $('#randomNumber').text(Random);
    num1 = Math.floor(Math.random() * 11 + 1);
    num2 = Math.floor(Math.random() * 11 + 1);
    num3 = Math.floor(Math.random() * 11 + 1);
    num4 = Math.floor(Math.random() * 11 + 1);
    userTotal = 0;
    $('#finalTotal').text(userTotal);
  }

  //Adding wins
  function win() {
    alert("You won this round!");
    wins++;
    $('#numberWins').text(wins);
    restart();
  }
  //Adding losses
  function lose() {
    alert("You lost this round - No worries: Try again!");
    losses++;
    $('#numberLosses').text(losses);
    restart()
  }
  //sets up click for Crystals
  $('#one').on('click', function () {
    userTotal = userTotal + num1;
    console.log("New userTotal= " + userTotal);
    $('#finalTotal').text(userTotal);
    //sets win or lose conditions
    if (userTotal == Random) {
      win();
    }
    else if (userTotal > Random) {
      lose();
    }
  })
  $('#two').on('click', function () {
    userTotal = userTotal + num2;
    console.log("New userTotal= " + userTotal);
    $('#finalTotal').text(userTotal);
    if (userTotal == Random) {
      win();
    }
    else if (userTotal > Random) {
      lose();
    }
  })
  $('#three').on('click', function () {
    userTotal = userTotal + num3;
    console.log("New userTotal= " + userTotal);
    $('#finalTotal').text(userTotal);
    // win/lose conditions
    if (userTotal == Random) {
      win();
    }
    else if (userTotal > Random) {
      lose();
    }
  })
  $('#four').on('click', function () {
    userTotal = userTotal + num4;
    console.log("New userTotal= " + userTotal);
    $('#finalTotal').text(userTotal);

    if (userTotal == Random) {
      win();
    }
    else if (userTotal > Random) {
      lose();
    }
  });
}); 