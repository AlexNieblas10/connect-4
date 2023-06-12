export function sortArray(array) {
  let newArray = [];
  array.map((item) => {
    if (item > newArray[0]) {
      newArray.unshift(item);
    } else {
      newArray.push(item);
    }
  });
  return newArray
}
