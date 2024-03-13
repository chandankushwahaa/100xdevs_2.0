// Both types and interfaces are used to define the shape of objects or the structure of data. They allow you to specify the types of properties and their corresponding values
// Type: Types can be extended using the & operator to combine multiple types together.
// Interface: Interfaces can be extended using the extends keyword to inherit properties from other interfaces.
// Type: Types can be used to define union types and intersection types.
// Interface: Interfaces can be used to define object types, function types, and array types.



type User1 = {
  name: string;
  age: number;
  email: string;
};

interface User2 {
  name: string;
  age: number;
  email: string;
}

const user1: User1 = {
  name: "John",
  age: 25,
  email: "john@example.com",
};

const user2: User2 = {
  name: "Jane",
  age: 30,
  email: "jane@example.com",
};

console.log(user1);
console.log(user2);