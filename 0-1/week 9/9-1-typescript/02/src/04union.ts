type GreetArgs = string | number; // interface gives error

function greet(id: GreetArgs, name: string) {
  if (typeof id === "string") {
    console.log(`Hello ${name}!`);
  } else {
    console.log(`Hello user with id ${id}!`);
  }
}

greet("123", "John");
greet(123, "John");