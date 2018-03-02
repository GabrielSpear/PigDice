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
