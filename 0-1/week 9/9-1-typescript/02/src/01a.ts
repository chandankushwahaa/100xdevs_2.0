
// Create a function isLegal that returns true or false if a user is above 18. It takes a user as an input.
function isAge(user: {
  firstname: string,
  lastname: string,
  age: number
}) {
  console.log(user);
  if(user.age >= 18) {
    return true;
  } else {
    return false;
  }
}

console.log(isAge({
  firstname: 'John',
  lastname: 'Doe',
  age: 19
})); 