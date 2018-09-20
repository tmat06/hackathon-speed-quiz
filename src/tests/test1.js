// Instructions:
// Two players - "black" and "white" are playing a game. The game consists of several rounds.
// If a player wins in a round, he is to move again during the next round. If a player loses a round,
// it's the other player who moves on the next round. Given whose turn it was on the previous round and
// whether he won, determine whose turn it is on the next round.

// Example:
// For lastPlayer = "black" and win = false, the output should be
// whoseMove(lastPlayer, win) = "white".

// lastPlayer will be a string
// win will be a boolean

// "black" or "white" - whose move it was during the previous round.
// true if the player who made a move during the previous round won, false otherwise.
// expecting the function to return a string
// Return "white" if white is to move on the next round, and "black" otherwise.

////////////////////////////////////////////////////////////////////////////////

// Sample Tests

//Input: lastPlayer: 'black'
//       win: false

//Expected Output: 'white'
//-----------------------------------

//Input: lastPlayer: 'black'
//       win: true

//Expected Output: 'black'

//-----------------------------------

export default function whoseMove(lastPlayer, win) {}
