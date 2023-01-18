function isAlphaNumeric(str) {
  let count_aplphanumeric = 0;
  let numeric = 0;
  for (let i = 0; i < str.length; i++) {
    let regex = new RegExp(/^(?=.*[a-zA-Z])(?=.*[0-9])[A-Za-z0-9]+$/);
    let regex1 = new RegExp(/^(?=.*[0-9])[0-9]+$/);
    if (regex.test(str[i]) == true) {
      count_aplphanumeric += 1;
    }
    if (regex1.test(str[i]) == true) {
      numeric += 1;
    }
  }
  return `Count of Alpha numeric = ${count_aplphanumeric} Count of Numeric = ${numeric}`;
}

let str = ['user', 'passw0rd', 'lett3r', '101', 'developer'];
console.log(isAlphaNumeric(str));
