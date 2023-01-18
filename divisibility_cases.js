const divisible_cases = (start, end) => {
  o1 = [];
  o2 = [];
  o3 = [];
  o4 = [];
  for (let i = start; i <= end; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
      o1.push(i);
    }
    if (i % 3 == 0 && i % 5 == 0) {
      o2.push(i);
    }
    if (i % 3 == 0 && i % 5 !== 0) {
      o3.push(i);
    }
    if (i % 3 !== 0 && i % 5 == 0) {
      o4.push(i);
    }
  }
  cases = [o1, o2, o3, o4];
  return cases;
};
console.log(divisible_cases(3, 25));
