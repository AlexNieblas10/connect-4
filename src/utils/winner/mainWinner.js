import { winnerDiagonal } from "./winnerDiagonal";
import { winnerHorizontal } from "./winnersHorizontal";
import { winnerVertical } from "./winnersVertical";

export function mainWinner(position) {
  if (
    winnerDiagonal(position) |
    winnerHorizontal(position) |
    winnerVertical(position)
  ) {
    return true;
  }
}
