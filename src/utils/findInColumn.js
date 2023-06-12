import { board } from "./board";

export function findInColumn(array, player) {
  for (const space of array) {
    if (board[space - 1].team === null) {
      board[space - 1].team = player
      return space - 1
    }
  }
}
