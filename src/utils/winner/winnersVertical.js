import { board } from "../board";

export function winnerVertical(placeToWinner) {
  if (
    board[placeToWinner]?.team === 1 &&
    board[placeToWinner + 7]?.team === 1 &&
    board[placeToWinner + 14]?.team === 1 &&
    board[placeToWinner + 21]?.team === 1
  ) {
    return true
  }
  if (
    board[placeToWinner]?.team === 1 &&
    board[placeToWinner - 7]?.team === 1 &&
    board[placeToWinner - 14]?.team === 1 &&
    board[placeToWinner - 21]?.team === 1
  ) {
    return true
  } 
  if (
    board[placeToWinner]?.team === 2 &&
    board[placeToWinner + 7]?.team === 2 &&
    board[placeToWinner + 14]?.team === 2 &&
    board[placeToWinner + 21]?.team === 2
  ) {
    return true
  }
  if (
    board[placeToWinner]?.team === 2 &&
    board[placeToWinner - 7]?.team === 2 &&
    board[placeToWinner - 14]?.team === 2 &&
    board[placeToWinner - 21]?.team === 2
  ) {
    return true
  }
}
