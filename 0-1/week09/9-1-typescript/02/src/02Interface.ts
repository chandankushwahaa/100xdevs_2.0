interface User {
  firstname: string,
  lastname: string,
  age: number,
  email?: string // optional
};

function isLegal(user: User) {
  if( user.age > 18){
    return true;
  }
  return false;
}
function greet1(user: User) {
  return `Hello ${user.firstname} ${user.lastname} ${user.age} ${user.email}`;
}

console.log(isLegal({
  firstname: 'Chandan',
  lastname: 'Kushwaha',
  age: 19
}));

console.log(greet1({
  firstname: 'Chandan',
  lastname: 'Kushwaha',
  age: 19,
  email: 'ch@gmail.com'
}));