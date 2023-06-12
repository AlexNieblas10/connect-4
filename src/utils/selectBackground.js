export function selectBackground (place){
  if (place.team === 1) {
    return "red"
  }
  if (place.team === 2) {
    return "yellow"
  }
}