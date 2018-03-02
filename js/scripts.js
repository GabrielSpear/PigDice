/* Back End */

//Player constructor
function Player(playerName, playerNumber, score) {
  this.playerName = playerName;
  this.playerNumber = playerNumber;
  this.score = score;
}

//Player prototype method to score points
Player.prototype.scorePoints = function(points) {
  this.score += points;
};

//Method to reset score on new game
Player.prototype.resetScore = function() {
  this.score = 0;
};

//Function to add to the player index counter for turn alternation
function switchPlayer(currentPlayerNumber, numberOfPlayers) {
  numberOfPlayers -= 1;
  var nextPlayer = 0;

  if (currentPlayerNumber === numberOfPlayers) {
    nextPlayer = 0;
  } else {
    nextPlayer = currentPlayerNumber + 1;
  }
  return nextPlayer;
}

//To generate a random integer
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//Simulate a roll of a 6 sided die
function rollD6() {
  var roll = getRandomInt(1, 6);
  return roll;
}
/* Front End */

function showDie(roll) {
  //Show image for current roll
  // $("#dieRoll").html("<img src='img/" +roll+ ".png' />");
};


$(document).ready(function(){
  //Create player objects
  var player1 = new Player(prompt("Player 1 enter your name: "), 1, 0);
  var player2 = new Player(prompt("Player 2 enter your name: "), 2, 0);

  //Display player names on screen
  $("#player1Name").text(player1.playerName);
  $("#player2Name").text(player2.playerName);

  //Create array to hold player objects
  var players = [player1, player2];

  //Variable to hold number of players
  var numberOfPlayers = 2;

  //Initial variables player scores
  var playerTotal1 = 0;
var playerTotal2 = 0;

  //Variables to track current player and turn score
  var currentPlayerIndex = 0;
  var turnTotal = 0;

  //Display starting active player and highlight their scorebox
  // $("#activePlayer").text(players[currentPlayerIndex].playerName);
  $("#player" + players[currentPlayerIndex].playerNumber + "Box").addClass("well2");

/* Roll button click */
  $("button#roll").click(function(){
