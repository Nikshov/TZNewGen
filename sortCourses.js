function sortCourses(arr) {
  function compare(a, b) {
  if (a.prices[0] < b.prices[0]) return -1;
  if (a.prices[0] > b.prices[0]) return 1;
  if (a.prices[0] == b.prices[0]) {
    if (a.prices[1] < b.prices[1]) return -1;
    else return 1;
  }
  }
  return arr.sort(compare);
}
