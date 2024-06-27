/*
Problem Solving, Part 1
The code below has at least one bug. Modify the code so that all the specs pass
when you run the following command in your terminal:
npm test test/04-problem-solving-pt1-spec.js
*/

// In baseball, the "magic number" for a team leading their division is the
// total games that the team needs to win or the number of games the
// second-place team must lose in order to secure the division title. The
// formula for calculating this is:

// magic number = (total number of games) - (number of wins by 1st place team) - (number of losses by the 2nd place team) + 1

// The magicNumber function takes in the total number of games as the first 
// parameter, the number of wins by the 1st place team as the second parameter,
// and the number of losses by the 2nd place team as the last parameter. It
// returns the magic number as calculated using the formula above.

function magicNumber(numGames, numWins1stPlace, numLosses2ndPlace) {
  let magicNum = numGames;
  magicNum -= numWins1stPlace;
  magicNum = magicNum + numLosses2ndPlace;
  return magicNum++;
}


// Write your own tests for magicNumber that print the function's return value
// to the terminal.

// Run the following command in the terminal to run this file and see the
// messages printed to the terminal:
// node problems/04-problem-solving-pt1.js

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = magicNumber;
