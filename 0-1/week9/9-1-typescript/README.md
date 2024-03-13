# TypeScript

## Setting and installation

**Step 1 - Install TypeScript Globally:**

```bash
npm install -g typescript
npm list -g
```

This command installs TypeScript globally on your machine, allowing you to use the `tsc` command anywhere.
The second command to check list of install npm packages

**Step 2 - Initialize a Node.js Project with TypeScript:**

```bash
mkdir type-app
cd type-app
npm init -y
npx tsc --init
```

These commands create a new directory (`type-app`), initialize a Node.js project with default settings (`npm init -y`), and then generate a `tsconfig.json` file using `npx tsc --init`.

**Step 3 - Create a TypeScript File (a.ts):**

 - Create two folder  `dist` (it contain `js`) code and `src` (it contain `ts` code).

 - Create `.gitingore` file add `dist` to it. It won't pushed the js code to github. 

**Step 4 - Add dist and src to `tsconfig.json` file:**

-    ` "rootDir": "./src", `  - search and add 
-    ` "outDir": "./dist", ` 
 
**Step 5 - Create a TypeScript File `a.ts` inside src folder:**

```tsx
// a.ts
const x: number = 1;
console.log(x);
```

**Step 5 - Compile the TypeScript File to JavaScript:**

```bash
tsc -b    OR    tsc src/a.ts --outDir ./dist/
```
It will create a.js file inside `dist` folder

**Step 5 - Run (`a.js`):**

```bash
node dist\a.js    OR    node dist/a.js
```

<hr>

# Typescript

## Why Typescript
JavaScript is a powerful and widely used programming language, but it has a dynamic typing system, which means variable types are determined at runtime. While dynamic typing provides flexibility, it can lead to runtime errors that are challenging to catch during development.

## What Typescript

In response to these challenges, Microsoft introduced TypeScript, a superset of JavaScript that adds static typing to the language. TypeScript is designed to address some of the limitations of JavaScript by providing developers with a more robust type system.

![](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2Fd578419f-7327-4580-9ece-2430f946db42%2FScreenshot_2024-01-28_at_1.00.19_AM.png?table=block&id=b04e253c-04bf-459c-a2a1-bcd33d400cdc&cache=v2)

## How Typescript

1. **Static Typing:**
    - TypeScript introduces static typing, allowing developers to declare the types of variables, parameters, and return values at compile-time.
    - Static typing helps catch potential errors during development, offering a level of code safety that may not be achievable in pure JavaScript.
2. **Compatibility with JavaScript:**
    - TypeScript is a superset of JavaScript, meaning that any valid JavaScript code is also valid TypeScript code.
    - Developers can gradually adopt TypeScript in existing JavaScript projects without the need for a full rewrite.
3. **Tooling Support:**
    - TypeScript comes with a rich set of tools and features for development, including code editors (like Visual Studio Code) with built-in TypeScript support.
    - The TypeScript compiler (tsc) translates TypeScript code into plain JavaScript, allowing it to run in any JavaScript environment.
4. **Enhanced IDE Experience:**
    - IDEs (Integrated Development Environments) that support TypeScript offer improved code navigation, autocompletion, and better refactoring capabilities.
    - TypeScript's type information enhances the overall development experience.
5. **Interfaces and Type Declarations:**
    - TypeScript introduces concepts like interfaces and type declarations, enabling developers to define clear contracts for their code.
    - Interfaces help document the shape of objects, making it easier to understand and maintain the code.
6. **Compilation:**
    - TypeScript code is transpiled to JavaScript during the compilation process, ensuring that the resulting code is compatible with various JavaScript environments and browsers.


# **Execution of TypeScript Code**

TypeScript code doesn't run natively in browsers or JavaScript environments. Instead, it undergoes a compilation process to generate equivalent JavaScript code. Here's an overview of how TypeScript code is executed:

1. **Writing TypeScript Code:**
    - Developers write TypeScript code using `.ts` or `.tsx` files, employing TypeScript's syntax with features like static typing, interfaces, and type annotations.

1. **TypeScript Compiler (tsc):**
    - The TypeScript Compiler (`tsc`) is a command-line tool that processes TypeScript code.
    - Developers run `tsc` to initiate the compilation process.

1. **Compilation Process:**
    - The TypeScript Compiler parses and analyzes the TypeScript code, checking for syntax errors and type-related issues.
    - It generates equivalent JavaScript code, typically in one or more `.js` or `.jsx` files.

1. **Generated JavaScript Code:**
    - The output JavaScript code closely resembles the original TypeScript code but lacks TypeScript-specific constructs like type annotations.
    - TypeScript features that aren't present in JavaScript (e.g., interfaces) are often transpiled or emitted in a way that doesn't affect runtime behavior.

1. **JavaScript Execution:**
    - The generated JavaScript code can now be executed by any JavaScript runtime or browser.
    - Developers can include the resulting JavaScript files in HTML documents or use them in Node.js environments.

1. **Runtime Environment:**
    - In the chosen runtime environment, the JavaScript code is interpreted or compiled by the JavaScript engine (e.g., V8 in Chrome, SpiderMonkey in Firefox).
    - Just-in-time (JIT) compilation or interpretation occurs to convert the code into machine code that the computer's processor can execute.

1. **Interacting with the DOM (Browser Environments):**
    - In browser environments, the JavaScript code, generated from TypeScript, may interact with the Document Object Model (DOM) to manipulate web page structure and behavior.


![](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2F9eebffab-c71c-4259-bd0a-d3018f9cbcb6%2FScreenshot_2024-01-28_at_1.06.49_AM.png?table=block&id=c4e38c5b-b88b-420d-8c0b-cae9448be840&cache=v2)


# **TypeScript Compiler (`tsc`)**

- The TypeScript Compiler (`tsc`) is responsible for transpiling TypeScript code into JavaScript.
- It is a part of the official TypeScript distribution and can be installed using tools like npm.
- Developers run `tsc` from the command line, specifying the TypeScript file(s) they want to compile.
- Configuration for the compilation process can be provided via a `tsconfig.json` file.
- The compiler performs type checking, emits JavaScript files, and allows customization of compilation options.

> In summary, TypeScript code is transformed into JavaScript through the TypeScript Compiler (`tsc`). This compilation process ensures that TypeScript's features are compatible with existing JavaScript environments, enabling developers to benefit from static typing during development while still producing standard JavaScript for execution.
> 

In addition to the TypeScript Compiler (**`tsc`**), several alternative tools have gained popularity for their efficiency, speed, and additional features when transpiling TypeScript to JavaScript. Here are a couple of noteworthy ones:

1. esbuild: a highly performant JavaScript bundler and minifier, but it also supports TypeScript.
2. **swc (Speedy Web Compiler): a fast and low-level JavaScript/TypeScript compiler.**


# Basic Types in Typescript

In TypeScript, basic types serve as the building blocks for defining the data types of variables. Here's an overview of some fundamental types provided by TypeScript:

1. **Number:**
    - Represents numeric values.
    - Example:
        
        ```tsx
        let age: number = 25;
        ```
        
2. **String:**
    - Represents textual data (sequences of characters).
    - Example:
        
        ```tsx
        let name: string = "John";
        ```
        
3. **Boolean:**
    - Represents true or false values.
    - Example:
        
        ```tsx
        let isStudent: boolean = true;
        ```
        
4. **Null:**
    - Represents the absence of a value.
    - Example:
        
        ```tsx
        let myVar: null = null;
        ```
        
5. **Undefined:**
    - Represents a variable that has been declared but not assigned a value.
    - Example:
        
        ```tsx
        let myVar: undefined = undefined;
        ```



# Problems and Code Implementation

## 1] **Hello World Greeting**

**Objective:** 

Learn how to give types to function arguments in TypeScript.

**Task:**
Write a TypeScript function named `greet` that takes a user's first name as an argument and logs a greeting message to the console.

**Function Signature:**

```tsx
function greet(firstName: string): void {
    // Implementation goes here
}
```

**Solution:**

```tsx
function greet(firstName: string): void {
    console.log("Hello " + firstName);
}

// Example Usage
greet("harkirat");
```

**Explanation:**

1. **Function Definition (`function greet(firstName: string): void`):**
    - The `greet` function is declared with a parameter named `firstName`.
    - `: string` indicates that the `firstName` parameter must be of type string.
    - `: void` specifies that the function does not return any value.
2. **Function Body (`console.log("Hello " + firstName);`):**
    - Inside the function body, a `console.log` statement prints a greeting message to the console.
    - The message includes the provided `firstName` parameter.
3. **Function Invocation (`greet("harkirat");`):**
    - The function is called with the argument `"harkirat"`.
    - The provided argument must be a string, aligning with the specified type in the function definition.

> This example demonstrates the basic usage of TypeScript types in function parameters, ensuring that the expected data type is enforced and catching errors related to type mismatches during development.
> 

## 2] **Sum Function**

**Objective:** 

Learn how to assign a return type to a function in TypeScript.

**Task:** 

Write a TypeScript function named `sum` that takes two numbers as arguments and returns their sum. Additionally, invoke the function with an example.

**Function Signature:**

```tsx
function sum(a: number, b: number): number {
    // Implementation goes here
}
```

**Solution:**

```tsx
function sum(a: number, b: number): number {
    return a + b;
}

// Example Usage
console.log(sum(2, 3));
```

**Explanation:**

1. **Function Definition (`function sum(a: number, b: number): number`):**
    - The `sum` function is declared with two parameters, `a` and `b`, both of type number.
    - `: number` indicates that the function returns a value of type number.
2. **Function Body (`return a + b;`):**
    - Inside the function body, the sum of `a` and `b` is calculated using the `+` operator.
    - The result is then returned.
3. **Function Invocation (`console.log(sum(2, 3));`):**
    - The function is called with the arguments `2` and `3`.
    - The result is logged to the console using `console.log`.

> This example showcases how to specify the return type of a function in TypeScript, ensuring that the function returns the expected data type. In this case, the `sum` function returns a number.
>


