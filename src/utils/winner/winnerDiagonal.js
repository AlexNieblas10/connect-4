import { board } from "../board";

export function winnerDiagonal(placeToWinner) {
  if (
    board[placeToWinner]?.team === 1 &&
    board[placeToWinner - 6]?.team === 1 &&
    board[placeToWinner - 12]?.team === 1 &&
    board[placeToWinner - 18]?.team === 1
  ) {
    return true
  }
  if (
    board[placeToWinner]?.team === 1 &&
    board[placeToWinner +  6]?.team === 1 &&
    board[placeToWinner +  12]?.team === 1 &&
    board[placeToWinner +  18]?.team === 1
  ) {
    return true
  }
  if (
    board[placeToWinner]?.team === 1 &&
    board[placeToWinner +  8]?.team === 1 &&
    board[placeToWinner +  16]?.team === 1 &&
    board[placeToWinner +  24]?.team === 1
  ) {
    return true
  }
  if (
    board[placeToWinner]?.team === 1 &&
    board[placeToWinner -  8]?.team === 1 &&
    board[placeToWinner -  16]?.team === 1 &&
    board[placeToWinner -  24]?.team === 1
  ) {
    return true
  }
  if (
    board[placeToWinner]?.team === 2 &&
    board[placeToWinner - 6]?.team === 2 &&
    board[placeToWinner - 12]?.team === 2 &&
    board[placeToWinner - 18]?.team === 2
  ) {
    return true
  }
  if (
    board[placeToWinner]?.team === 2 &&
    board[placeToWinner +  6]?.team === 2 &&
    board[placeToWinner +  12]?.team === 2 &&
    board[placeToWinner +  18]?.team === 2
  ) {
    return true
  }
  if (
    board[placeToWinner]?.team === 2 &&
    board[placeToWinner +  8]?.team === 2 &&
    board[placeToWinner +  16]?.team === 2 &&
    board[placeToWinner +  24]?.team === 2
  ) {
    return true
  }
  if (
    board[placeToWinner]?.team === 2 &&
    board[placeToWinner -  8]?.team === 2 &&
    board[placeToWinner -  16]?.team === 2 &&
    board[placeToWinner -  24]?.team === 2
  ) {
    return true
  }
}
