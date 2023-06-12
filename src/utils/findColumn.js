import { columns } from "./columns";

export function findColumn(place) {
  let columnFinded;
  columns.map((column) => {
    if (column.includes(place)) {
      columnFinded = column;
    }
  });
  return columnFinded
}
