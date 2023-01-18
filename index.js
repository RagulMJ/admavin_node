function minmax(a, b) {
  let arr1 = [];
  let arr2 = [];
  for (let i = 0; i < a.length; i++) {
    if (a[i] < b[i]) {
      arr1.push(b[i]);
      arr2.push(a[i]);
    } else {
      arr1.push(a[i]);
      arr2.push(b[i]);
    }
  }
  max1 = arr1.sort((a, b) => b - a);
  max2 = arr2.sort((a, b) => b - a);

  return max1[0] * max2[0];
}
let max_value = minmax(
  [1, 2, 3, 2, 3, 4, 5, 3, 5, 6, 7, 8],
  [2, 1, 5, 3, 4, 6, 4, 3, 2, 3, 1, 2]
);

console.log(max_value);
