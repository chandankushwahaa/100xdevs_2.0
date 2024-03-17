# Content
-  [Promises](#promises)
-  [Express](#express)
-  [HTTP Methods](#httpmethods)
- [Serving Routes](#servingroutes)



# 1. Promises
Promises are a way to handle asynchronous operations in JavaScript. They are easy to manage when dealing with multiple asynchronous operations where callbacks can create callback hell leading to unmanageable code.
A Promise is in one of these states:

 - Pending: initial state, neither fulfilled nor rejected.
-  Fulfilled: meaning that the operation completed successfully.
- Rejected: meaning that the operation failed.

### **Key Characteristics of Promises:**

1.  **Asynchronous Operations:**
    -   Promises are commonly used to handle asynchronous operations, such as fetching data from a server, reading a file, or executing a timer.
2.  **States:**
    -   A promise can be in one of three states:
        -   **Pending:** The initial state, before the promise is resolved or rejected.
        -   **Fulfilled (Resolved):** The operation completed successfully, and the promise has a resulting value.
        -   **Rejected:** There was an error during the operation, and the promise has a reason for the failure.
3.  **Chaining:**
    -   Promises support chaining through the **`then`** method, allowing you to sequence asynchronous operations in a readable manner.
4.  **Error Handling:**
    -   Promises have built-in error handling through the **`catch`** method, making it easier to manage and propagate errors in asynchronous code.
 

### **Why Do We Need Promises?**

1.  **Avoiding Callback Hell (Callback Pyramids):**
    
    -   Promises help to mitigate the problem of callback hell, where nesting callbacks leads to unreadable and hard-to-maintain code.
    
    ```jsx
    
    // Without Promises
    asyncOperation1((result1) => {
      asyncOperation2(result1, (result2) => {
        asyncOperation3(result2, (result3) => {
          // ...
        });
      });
    });
    
    // With Promises
    asyncOperation1()
      .then((result1) => asyncOperation2(result1))
      .then((result2) => asyncOperation3(result2))
      .then((result3) => {
        // ...
      });
    
    
    ```
    
2.  **Sequential Execution of Asynchronous Code:**
    
    -   Promises provide a clean way to execute asynchronous operations sequentially, improving code readability.
    
    ```jsx
    
    // Without Promises
    asyncOperation1((result1) => {
      asyncOperation2(result1, (result2) => {
        asyncOperation3(result2, (result3) => {
          // ...
        });
      });
    });
    
    // With Promises
    asyncOperation1()
      .then((result1) => asyncOperation2(result1))
      .then((result2) => asyncOperation3(result2))
      .then((result3) => {
        // ...
      });
    
    
    ```
    
3.  **Error Handling:**
    
    -   Promises simplify error handling by providing a centralized **`catch`** block to handle errors for a sequence of asynchronous operations.
    
    ```jsx
    
    asyncOperation1()
      .then((result1) => asyncOperation2(result1))
      .then((result2) => asyncOperation3(result2))
      .catch((error) => {
        console.error('An error occurred:', error);
      });
    
    
    ```
    
4.  **Promise.all for Parallel Execution:**
    
    -   Promises offer the **`Promise.all`** method, allowing parallel execution of multiple asynchronous operations and waiting for all of them to complete.
    
    ```jsx
    
    const promise1 = asyncOperation1();
    const promise2 = asyncOperation2();
    
    Promise.all([promise1, promise2])
      .then((results) => {
        const result1 = results[0];
        const result2 = results[1];
        // ...
      })
      .catch((error) => {
        console.error('An error occurred:', error);
      });
    
    
    ```
    

In summary, promises provide a cleaner and more organized way to work with asynchronous code, making it easier to read, write, and maintain. They address common challenges associated with callback-based code and promote better error handling and sequential execution of asynchronous operations.

### **Promises Basics:**

1.  **Creating a Promise:**
    
    -   A promise represents the eventual completion or failure of an asynchronous operation.
    -   The **`Promise`** constructor takes a function with two parameters: **`resolve`** and **`reject`**.
    
    ```jsx
    
    const myPromise = new Promise((resolve, reject) => {
      // Asynchronous operation goes here
      // If successful, call resolve with the result
      // If there's an error, call reject with the error
    });
    
    
    ```
    
2.  **Resolving a Promise:**
    
    -   Use the **`resolve`** function when the asynchronous operation is successful.
    
    ```jsx
    
    const successfulPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('Operation succeeded!');
      }, 1000);
    });
    
    
    ```
    
3.  **Rejecting a Promise:**
    
    -   Use the **`reject`** function when there's an error during the asynchronous operation.
    
    ```jsx
    
    const failedPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        reject('Operation failed!');
      }, 1000);
    });
    
    
    ```
    

### **Consuming Promises:**

1.  **Using `then` and `catch`:**
    
    -   The **`then`** method is used to handle the resolved value.
    -   The **`catch`** method is used to handle errors.
    
    ```jsx
    
    successfulPromise
      .then((result) => {
        console.log(result); // Output: Operation succeeded!
      })
      .catch((error) => {
        console.error(error); // This won't be called in this example
      });
    
    
    ```
    
2.  **Chaining Promises:**
    
    -   Promises can be chained using **`then`**. Each **`then`** returns a new promise.
    
    ```jsx
    
    successfulPromise
      .then((result) => {
        console.log(result); // Output: Operation succeeded!
        return 'New value';
      })
      .then((newValue) => {
        console.log(newValue); // Output: New value
      })
      .catch((error) => {
        console.error(error);
      });
    
    
    ```
    
3.  **Promise All:**
    
    -   **`Promise.all`** is used to wait for multiple promises to complete.
    
    ```jsx
    
    const promise1 = Promise.resolve('One');
    const promise2 = Promise.resolve('Two');
    
    Promise.all([promise1, promise2])
      .then((values) => {
        console.log(values); // Output: ['One', 'Two']
      })
      .catch((error) => {
        console.error(error);
      });
    
    
    ```
    

Promises are essential for handling asynchronous code in a clean and readable way, especially when working with features like fetching data from a server, handling events, or working with timers.


# 2. Express
## Create a simple express server

1.  **Express Framework:**
    
    -   **Purpose:** Express is a web application framework for Node.js, designed to simplify the process of building web applications and APIs.
    -   **Routing:** Express provides a powerful routing mechanism that allows you to define how your application responds to different HTTP requests (e.g., GET, POST).
2.  **HTTP Methods:**
    
    -   **GET:** Used to retrieve data from the server. Typically used for reading information.
    -   **POST:** Used to submit data to the server. Often used for creating or updating resources.
    -   **Other Methods (PUT, DELETE, etc.):** Used for various purposes, such as updating or deleting resources.
3.  **Routes:**
    
    -   **Definition:** Routes define the paths in your application and the HTTP methods they respond to.
    -   **Parameters:** Routes can have parameters that allow dynamic handling of different values.
4.  **Request and Response Objects:**
    
    -   **Request (`req`):** Represents the incoming HTTP request from the client. Contains information about the request, such as parameters, headers, and body.
    -   **Response (`res`):** Represents the outgoing HTTP response to be sent back to the client. Allows you to send data, set headers, and more.
    
    1.  **Listening and Ports:**
    
    -   **Server Creation:** After defining routes and middleware, the Express application needs to be "listened" to for incoming requests.
    -   **Port:** The server listens on a specific port (e.g., 3000) for incoming HTTP requests.

```jsx
//server.js
// Import the express module
const express = require('express');

// Create an instance of the express application
const app = express();

// Define a route for the root URL ("/")
app.get('/', (req, res) => {
  res.send('Hello, this is the root/main route!');
});

// Define another route for "/api" with JSON response
app.get('/api', (req, res) => {
  res.json({ message: 'This is the API route.' });
});

// Define a route with URL parameters
app.get('/greet/:name', (req, res) => {
  const { name } = req.params;
  res.send(`Hello, ${name}!`);
});

// Start the server on port 3000
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on <http://localhost>:${PORT}`);
});

```
# Run the server

```bash
node server.js

```

Visit **`http://localhost:3000`** in your browser, and you should see the response from the root route. You can also try accessing other defined routes (**`/api`**, **`/greet/:name`**).


# 3. HTTPMethods
## Difference between GET, POST, PUT, and DELETE

**GET**, **POST**, **PUT**, and **DELETE** are four HTTP methods used to interact with resources on a web server. They have different purposes, data submission methods, and impacts on server and browser behavior.

### GET:

1. **Purpose:**
    - Used to request data from a specified resource.
2. **Data Submission:**
    - Data is appended to the URL as query parameters.
3. **Visibility:**
    - Parameters are visible in the URL.
4. **Caching:**
    - Requests can be cached by the browser, and URLs can be bookmarked.
5. **Examples:**
    - Fetching a webpage, retrieving search results.

### POST:

1. **Purpose:**
    - Used to submit data to be processed to a specified resource.
2. **Data Submission:**
    - Data is sent in the request body.
3. **Visibility:**
    - Parameters are not visible in the URL.
4. **Caching:**
    - Requests are not cached, and URLs cannot be bookmarked.
5. **Examples:**
    - Submitting a form, uploading a file.

### PUT:

1. **Purpose:**
    - Used to update a resource or create a new resource if it doesn't exist.
2. **Data Submission:**
    - Similar to POST, data is sent in the request body.
3. **Visibility:**
    - Parameters are not visible in the URL.
4. **Caching:**
    - Similar to POST, requests are not cached, and URLs cannot be bookmarked.
5. **Examples:**
    - Updating a user's profile.

### DELETE:

1. **Purpose:**
    - Used to delete a specified resource.
2. **Data Submission:**
    - No data is typically sent with the request.
3. **Visibility:**
    - Parameters are not visible in the URL.
4. **Caching:**
    - Similar to POST and PUT, requests are not cached, and URLs cannot be bookmarked.
5. **Examples:**
    - Deleting a user account.

### When to Use Each:

- **GET:** Use for safe and idempotent operations, such as retrieving data.
- **POST:** Use for non-idempotent operations, like submitting data.
- **PUT:** Use to update or create resources.
- **DELETE:** Use to delete resources.

The choice of method depends on the operation you want to perform and the desired behavior for interacting with the server.

# How to handle GET requests

Handling GET requests in an Express.js application involves defining routes that respond to GET HTTP requests. Here's a basic example of handling a GET request in an Express.js application:

```bash
const express = require('express');
const app = express();
const port = 3000;

// Define a simple GET route
app.get('/', (req, res) => {
  res.send('Hello, this is a GET request!');
});

// Define a route with a parameter
app.get('/greet/:name', (req, res) => {
  const { name } = req.params;
  res.send(`Hello, ${name}!`);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on <http://localhost>:${port}`);
});

```

In this example:

1.  We create an instance of the Express application using **`express()`**.
2.  We define a simple GET route for the root URL (**`'/'`**) that responds with a message.
3.  We define another GET route with a parameter (**`'/greet/:name'`**) that responds with a personalized greeting based on the parameter.
4.  We start the server with **`app.listen`** on port 3000.

When you run this script (**`node filename.js`**) and visit **`http://localhost:3000`** in your browser, you should see the response from the root route. Additionally, visiting **`http://localhost:3000/greet/John`** should display a personalized greeting for the name "John."

This is a basic example, and in a real-world application, you would likely have more complex routes and logic. Express provides a flexible and powerful routing system, allowing you to handle different HTTP methods, route parameters, query parameters, and more.


# How to handle POST request

When building web applications, it's common to use HTTP POST requests to send data from the client (e.g., a form submission) to the server. In Express.js, handling POST requests involves using middleware to parse the incoming data and defining route handlers to process the data accordingly.

## **Middleware for Parsing JSON and Form Data:**

Before handling POST requests, it's important to include middleware to parse the incoming data. Express provides built-in middleware for handling JSON and form data. Add the following middleware to your Express app:

```jsx
// Middleware to parse JSON and form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

```

## **Handling a POST Request:**

```jsx
// In-memory array to store text content
const textContent = [];

// Route to handle POST requests for adding text content
app.post('/add-content', (req, res) => {
  // Extract text content from the request body
  const newContent = req.body.content;

  // Validate the content (you might want to add more robust validation)
  if (!newContent) {
		// if there is an error it will send the code 400 and an error
    return res.status(400).json({ error: 'Content is required' });
  }

  // Add the content to the in-memory array
  textContent.push(newContent);

  // Respond with a success message
  res.status(201).json({ message: 'Content added successfully' });
});

```

## Handling PUT and DELETE Requests

PUT and DELETE requests are used to update and delete resources on the server, respectively. In Express.js, you can handle these requests similarly to POST requests by defining appropriate routes and route handlers.

```jsx
// Route to handle PUT requests for updating a resource
app.put('/update-resource/:id', (req, res) => {
  const resourceId = req.params.id;
  // Process the update and send a response
});

// Route to handle DELETE requests for deleting a resource
app.delete('/delete-resource/:id', (req, res) => {
  const resourceId = req.params.id;
  // Process the deletion and send a response
});
```

Express provides a flexible and powerful routing system, allowing you to handle various HTTP methods and implement complex application logic easily.



# 3. Response Object

## Sending response back to Client

In an Express.js application, you send a response back to the client using the **`res`** (response) object. The **`res`** object provides various methods to send different types of responses, such as text, JSON, HTML, and more. Here are some common ways to send responses back to the client:

1.  **Sending Plain Text:**
    
    -   Use the **`res.send`** method to send plain text.
    
    ```jsx
    javascriptCopy code
    app.get('/', (req, res) => {
      res.send('Hello, this is a plain text response!');
    });
    
    ```
    
2.  **Sending JSON:**
    
    -   Use the **`res.json`** method to send a JSON response.
    
    ```jsx
    javascriptCopy code
    app.get('/api/data', (req, res) => {
      const data = { message: 'This is a JSON response.' };
      res.json(data);
    });
    
    ```
    
3.  **Sending HTML:**
    
    -   Use the **`res.send`** method to send HTML content.
    
    ```jsx
    javascriptCopy code
    app.get('/html', (req, res) => {
      const htmlContent = '<h1>This is an HTML response</h1>';
      res.send(htmlContent);
    });
    
    ```
    
4.  **Redirecting:**
    
    -   Use the **`res.redirect`** method to redirect the client to a different URL.
    
    ```jsx
    javascriptCopy code
    app.get('/redirect', (req, res) => {
      res.redirect('/new-location');
    });
    
    ```
    
5.  **Sending Status Codes:**
    
    -   Use the **`res.status`** method to set the HTTP status code.
    
    ```jsx
    javascriptCopy code
    app.get('/not-found', (req, res) => {
      res.status(404).send('Page not found');
    });
    
    ```
    
6.  **Sending Files:**
    
    -   Use the **`res.sendFile`** method to send files.
    
    ```jsx
    javascriptCopy code
    const path = require('path');
    
    app.get('/file', (req, res) => {
      const filePath = path.join(__dirname, 'files', 'example.txt');
      res.sendFile(filePath);
    });
    
    ```
    
7.  **Setting Headers:**
    
    -   Use the **`res.set`** method to set HTTP headers.
    
    ```jsx
    javascriptCopy code
    app.get('/custom-header', (req, res) => {
      res.set('X-Custom-Header', 'Custom Header Value');
      res.send('Response with a custom header');
    });
    
    ```
    
These examples showcase various ways to send responses back to the client based on different scenarios. The **`res`** object provides a versatile set of methods to handle a wide range of response types. Depending on the use case, you can choose the appropriate method to send the desired response to the client.


# 4. ServingRoutes
## How to serve different routes

Use the **`app`** object to define routes for different URLs. Routes are defined using HTTP methods (such as **`GET`**, **`POST`**, **`PUT`**, **`DELETE`**, etc.) and specify a callback function that gets executed when a request matches the specified URL and method.
```jsx
const express = require('express');
const app = express();
const port = 3000;

// get route
app.get('/', (req, res) => {
  res.send('Hello from GET route!');
});

// post route
app.post('/add', (req, res) => {
  res.send('Hello from POST route!');
});

// PUT route - updation
app.put('/put/:id', (req, res) => {
  res.send('Hello from PUT route!');
});

//DELETE route 
app.delete('/delete/:id', (req, res) => {
  res.send('Hello from DELETE route!');
});

app.listen(port, () => {
  console.log(`Server is running on <http://localhost>:${port}`);
});

```

# 5. Understanding ENV
## How to start PORT on an env variable

### Install dotenv package

Install the **`dotenv`** package using npm. This package allows you to load environment variables from a file.

```bash
npm install dotenv

```

### **Create a `.env` File:**

Create a file named **`.env`** in the root of your project. This file will contain your environment variables. Add a variable for the port, for example:

```bash
PORT=3000

```

### **Load Environment Variables in Your Express App:**

In your main Express application file (e.g., **`app.js`** or **`index.js`**), load the environment variables using **`dotenv`**. Add the following lines at the top of your file:

```jsx
require('dotenv').config();

```

### **Use the PORT Environment Variable:**

```jsx
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Rest of your Express app code...

app.listen(port, () => {
  console.log(`Server is running on <http://localhost>:${port}`);
});

```

### **Run Your Express App:**

```bash
node app.js

```

# 6. JSON 
## How to send JSON response

In an Express.js application, you can send a JSON response using the **`res.json()`** method. This method automatically sets the appropriate Content-Type header to **`application/json`** and sends the JSON-formatted response to the client.

```jsx
const express = require('express');
const app = express();
const port = 3000;

app.get('/get-json', (req, res) => {
  // Create an object to be sent as JSON
  const responseData = {
    message: 'This is a JSON response',
    data: {
      key1: 'value1',
      key2: 'value2',
    },
  };

  // Send the JSON response
  res.json(responseData);
});

app.listen(port, () => {
  console.log(`Server is running on <http://localhost>:${port}`);
});

```