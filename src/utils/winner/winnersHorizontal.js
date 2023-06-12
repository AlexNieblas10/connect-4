import { board } from "../board";

export function winnerHorizontal(placeToWinner) {
  if (
    board[placeToWinner]?.team === 1 &&
    board[placeToWinner + 1]?.team === 1 &&
    board[placeToWinner + 2]?.team === 1 &&
    board[placeToWinner + 3]?.team === 1
  ) {
    return true
  }
  if (
    board[placeToWinner]?.team === 1 &&
    board[placeToWinner - 1]?.team === 1 &&
    board[placeToWinner - 2]?.team === 1 &&
    board[placeToWinner - 3]?.team === 1
  ) {
    return true
  } 
  if (
    board[placeToWinner]?.team === 2 &&
    board[placeToWinner + 1]?.team === 2 &&
    board[placeToWinner + 2]?.team === 2 &&
    board[placeToWinner + 3]?.team === 2
  ) {
    return true
  }
  if (
    board[placeToWinner]?.team === 2 &&
    board[placeToWinner - 1]?.team === 2 &&
    board[placeToWinner - 2]?.team === 2 &&
    board[placeToWinner - 3]?.team === 2
  ) {
    return true
  }
}
