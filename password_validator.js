const password_Valid = (str) => {
  let regex = new RegExp(
    /^(?=.*\d)(?=.*[A-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$&*]+$/
  );
  if (regex.test(str) == true) return 'Valid';
  else return 'Invalid';
};

console.log(password_Valid('test@123'));
