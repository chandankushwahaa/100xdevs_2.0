// Partial makes all properties of a type optional. This is useful when you want to update only a few properties of a type.
;
function update2(props) {
    console.log("Name: ".concat(props.name, ", Age: ").concat(props.age, ", Email: ").concat(props.email));
}
var user2 = {
    id: '12345',
    name: 'Chandan',
    age: 30,
    email: 'chanda@gmail.com',
    password: 'password'
};
update2({ name: 'Chandan Kumar' });
