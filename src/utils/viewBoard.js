import { findColumn } from "./findColumn";
import { sortArray } from "./sortArray";
import { findInColumn } from "./findInColumn";

export function viewBoard(place, player) {
  let column = findColumn(place);
  let newColumn = sortArray(column);
  let res = findInColumn(newColumn, player);
  return res
}
