;
// Create a function that will update the user information
function update(props) {
    console.log("Name: ".concat(props.name, ", Age: ").concat(props.age, ", Email: ").concat(props.email));
}
// Create a new user
var user = {
    id: '12345',
    name: 'Chandan',
    age: 30,
    email: 'chanda@gmail.com',
    password: 'password'
};
// Update the user information
update({ name: 'Chandan Kumar', age: 31, email: 'chanda@gmail.com' });
