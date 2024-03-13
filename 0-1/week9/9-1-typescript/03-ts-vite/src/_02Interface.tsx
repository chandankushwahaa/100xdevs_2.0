// import React from 'react';

const _02Interface = () => {
 const employee = new Employee("John", 30, "chandan@gmail.com");

 return (
    <>
      <h2>2. Implementing Interface</h2>
      {employee.render()}
    </>
 )
}

interface Person {
 name: string;
 age: number;
 email: string;
 greet(phrase: string): void;
}

class Employee implements Person {
 name: string;
 age: number;
 email: string;

 constructor(public n: string, public a: number, public e: string) {
    this.name = n;
    this.age = a;
    this.email = e;
 }

 greet(phrase: string): void {
    console.log(`${phrase} ${this.name}`);
 }

 render() {
    return (
      <div>
        <p>Name: {this.name}</p>
        <p>Age: {this.age}</p>
        <p>Email: {this.email}</p>
      </div>
    );
 }
}

export default _02Interface;