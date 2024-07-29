# Content 
- Authentication, Authorization
- Hasing, Encryption
- JWT, Local Storage
- Cookies, Session
- Catching
- [Database](#Databases)

## 1. Authentication

In a programming context, authentication refers to the process of validating the identity of a user, system, or application attempting to access a computer system, network, or online service. The primary goal is to ensure that the entity requesting access is indeed who it claims to be. 

Authentication is a crucial aspect of software development, especially in scenarios where user access to sensitive data or functionalities needs to be controlled. Here's how authentication is typically implemented in programming:

- Browser make a request to the server, server checks if the user is valid or not, if valid then it sends the response back to the browser by sending a `token`(long string).
- Token is store in the `local storage` of the browser.
- After successful login, in every request, the token is sent to the server. The server does not check the username and password again, it only checks the token.

> ### Authentication vs Authorization
Authentication verifies a user's identity, while authorization determines what resources that user can access.


|**Authentication**| **Authorization** |
|--|--|
| Determines whether users are who they claim to be | Determines what users can and cannot access |
|Challenges the user to validate credentials (for example, through passwords, answers to security questions, or facial recognition)| Verifies whether access is allowed through policies and rules|
|Generally governed by the  OpenID Connect (OIDC) protocol| Generally governed by the OAuth 2.0 framework|
|Example: Employees in a company are required to authenticate through the network before accessing their company email|Example: After an employee successfully authenticates, the system determines what information the employees are allowed to access |



## 2. **Hashing:**

**Purpose:**

-   Hashing is a one-way process that converts a password or any data into a fixed-size string of characters, which is typically a hash value. The primary purpose of hashing passwords before storing them in a database is to enhance security.
-  It is the process of converting a given key into another value. It is a one-way function, means once the key is hashed, it cannot be converted back to the original key.

**How it Works:**

-   When a user signs up and provides a password, the application hashes the password using a cryptographic hash function (e.g., bcrypt, SHA-256).
-   The resulting hash is a fixed-length string unique to the input, making it difficult to reverse engineer the original password.

**Why Hash Passwords:**

-   **Security:** Hashing prevents storing plaintext passwords in the database, reducing the risk of data breaches. Even if the database is compromised, attackers only obtain hashed values, which are challenging to convert back to the original passwords.

**Installation**
```
npm install bcrypt
```

**Example in Node.js using bcrypt:**

```jsx
const bcrypt = require('bcrypt');

const saltRounds = 10; // Cost factor for hashing

// Hashing a password
const password = 'mySecretPassword';
bcrypt.hash(password, saltRounds, (err, hash) => {
  if (err) throw err;
  console.log('Hashed Password:', hash);

  // Verifying the password
  bcrypt.compare(password, hash, (err, result) => {
    if (err) throw err;
    console.log('Password match:', result); // true if match, false otherwise
  });
```
**Explanation:**

- **bcrypt.hash():** Hashes the password with a salt.
- **bcrypt.compare():** Verifies the password against the stored hash.

## 3. **Encryption:**

**Purpose:**

- It is the process of converting a given key into another value. It is a two-way function, means once the key is encrypted, it can be converted back to the original key.
-   Unlike hashing, encryption is a two-way process that involves converting data into a format that can be easily reversed using a decryption key. Encryption is used to protect the confidentiality of data.

**How it Works:**

-   Users' sensitive information (e.g., credit card details) may be encrypted before storing it in a database.
-   To view or use the original data, a decryption key is required.

**Why Use Encryption:**

-   **Confidentiality:** Encrypting sensitive data adds an extra layer of security. Even if unauthorized access occurs, the data remains unreadable without the decryption key.

**Example in Node.js using crypto:**

```jsx
const crypto = require('crypto');

const algorithm = 'aes-256-cbc'; // AES encryption algorithm
const key = crypto.randomBytes(32); // 256-bit key
const iv = crypto.randomBytes(16); // Initialization vector

// Encryption
const encrypt = (text) => {
  const cipher = crypto.createCipheriv(algorithm, key, iv);
  let encrypted = cipher.update(text, 'utf8', 'hex');
  encrypted += cipher.final('hex');
  return encrypted;
};

// Decryption
const decrypt = (encryptedText) => {
  const decipher = crypto.createDecipheriv(algorithm, key, iv);
  let decrypted = decipher.update(encryptedText, 'hex', 'utf8');
  decrypted += decipher.final('utf8');
  return decrypted;
};

const data = 'mySecretData';
const encryptedData = encrypt(data);
console.log('Encrypted Data:', encryptedData);

const decryptedData = decrypt(encryptedData);
console.log('Decrypted Data:', decryptedData);

```
**Explanation:**
- **crypto.createCipheriv():** Creates a Cipher object using the AES algorithm, a key, and an initialization vector (IV).
- **cipher.update() and cipher.final():** Encrypts the data.
- **crypto.createDecipheriv():** Creates a Decipher object to decrypt the data.
- **decipher.update() and decipher.final():** Decrypts the data.


> ### Hashing vs Encryption


| Hashing |Encryption  |
|--|--|
| Hashing is used to verify the integrity of data. | Encryption is used to protect the confidentiality of data |
| The original data cannot be retrieved from the hash | Encrypted data can be decrypted back to its original form using a key. |
| Password storage, data integrity checks. | Secure communication, data storage. |
| Use hashing (e.g., `bcrypt`) to store passwords securely. | Use encryption (e.g., `crypto` module) to protect sensitive data. |
| Blowfish, RSA, Asymmetric, Symmetric, etc. | MD5, SHA-1, SHA-2, SHA256, etc. |


## 4. JSON Web Tokens (JWT)

- JSON Web Tokens (JWT) are a compact, URL-safe means of representing claims to be transferred between two parties. The claims in a JWT are encoded as a JSON object that is used as the payload of a JSON Web Signature (JWS) structure or as the plaintext of a JSON Web Encryption (JWE) structure, enabling the claims to be digitally signed or integrity-protected with a Message Authentication Code (MAC) and/or encrypted. (Application -> Local Storage).

For example, a server could generate a token that has the claim "logged in as admin" and provide that to a client.
The client could then use that token to prove that it is logged in as admin. The tokens are signed by the server's key, so the server is able to verify that the token is legitimate. The tokens are designed to be compact, URL-safe,
and usable especially in a web-browser single sign-on (SSO) context. JWT claims can be typically used to pass identity of authenticated users between an identity provider and a service provider, or any other type of claims as required by business processes.
- A JSON Web Token, or JWT, is like a digital passport for information. It's a special kind of code that carries details about a user or some data. Imagine you have a passport when you travel to different countries – the passport holds your information and proves who you are. Similarly, a JWT carries information and proves certain things about you or the data it holds.

### How Does JWT Look?

A JWT is made up of three parts, and they are separated by dots:

1.  **Header:** Typically consists of two parts: the type of the token (i.e., JWT) and the signing algorithm (e.g., HMAC SHA256 or RSA).

```json
{
  "alg": "HS256",
  "typ": "JWT"
}
```
2.  **Payload:** Contains the claims. Claims are statements about an entity (typically, the user) and additional data.
```json
{
  "sub": "1234567890",
  "name": "John Doe",
  "iat": 1516239022
}
```
3.  **Signature:** To create the signature part, you have to take the encoded header, the encoded payload, a secret, the algorithm specified in the header, and sign that.

When you put these parts together, you get a long string that looks like a secret code.

### How Do JWTs Work?

1.  **Getting the JWT:**
    -   Imagine you log in to a website. After you enter your username and password, the website creates a JWT just for you.
2.  **Using the JWT:**
    -   Now, instead of asking you for your username and password every time you click on something, the website sends your JWT with each request. It's like having a special pass – once you show it, the website knows it's you.
3.  **Checking the JWT:**
    -   The website has a special key to check if the JWT is real. If everything is okay, the website knows the information in the JWT is trustworthy.

**Installation**
```
npm install jsonwebtoken
```

**Creating JWT** 
```js
const jwt = require('jsonwebtoken');

const payload = {
  sub: "1234567890",
  name: "John Doe",
  iat: Math.floor(Date.now() / 1000) // Issued at time
};

const secret = 'your-256-bit-secret';

const token = jwt.sign(payload, secret, { algorithm: 'HS256' });

console.log("Generated JWT:", token);
```

**Verifying JWT**
```js
const jwt = require('jsonwebtoken');

const token = 'your.jwt.token';

// Verifies the JWT and decodes the payload if valid.
jwt.verify(token, secret, (err, decoded) => {
  if (err) {
    console.error("Token verification failed:", err);
  } else {
    console.log("Decoded payload:", decoded);
  }
});
```
**Example of JWT in an Express.js Application:**
```js
const express = require('express');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');

const app = express();
const secret = 'your-256-bit-secret';

app.use(bodyParser.json());

// Login endpoint
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  // In a real application, you should verify username and password from a database
  if (username === 'user' && password === 'password') {
    const payload = { username };
    const token = jwt.sign(payload, secret, { algorithm: 'HS256', expiresIn: '1h' });
    res.json({ token });
  } else {
    res.sendStatus(401);
  }
});

// Middleware to verify JWT
const authenticateJWT = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];

  if (token) {
    jwt.verify(token, secret, (err, user) => {
      if (err) {
        return res.sendStatus(403);
      }
      req.user = user;
      next();
    });
  } else {
    res.sendStatus(401);
  }
};

// Protected route
app.get('/protected', authenticateJWT, (req, res) => {
  res.json({ message: 'This is a protected route.', user: req.user });
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
```

## 5. Local Storage

- It is a web storage object that allows data to be stored in the browser with no expiration date. The data will not be deleted when the browser is closed, and will be available the next day, week, or year.
- Local Storage is a client-side web storage mechanism that allows websites to store key-value pairs persistently on a user's device. In the realm of authentication, Local Storage often plays a crucial role in maintaining user sessions and preserving authentication tokens.

### Technical Implementation:

1.  **Token Storage:**
    -   After a successful authentication, the server generates an authentication token (e.g., JWT) for the user.
    -   This token is securely stored in the Local Storage of the user's browser.
2.  **Session Persistence:**
    -   Local Storage provides a means to persistently store this token across browser sessions. This persistence ensures that the user remains authenticated even if they close the browser and return later.
3.  **Reducing Authentication Overhead:**
    -   Instead of requiring users to authenticate themselves on every interaction, the stored token allows the server to recognize and validate the user swiftly, enhancing the user experience.

### Benefits of Local Storage in Authentication:

1.  **Efficient Session Management:**
    -   Local Storage facilitates efficient session management by enabling the storage of authentication tokens client-side. This reduces the need for frequent server-side authentication checks.
2.  **Improved Performance:**
    -   Since authentication tokens are readily available locally, the authentication process becomes faster, contributing to an improved overall performance of the application.
3.  **Enhanced User Experience:**
    -   Users experience the convenience of being automatically recognized and authenticated without the hassle of repeated logins, contributing to a seamless and user-friendly interface.

> Local Storage serves as a valuable tool in the authentication landscape, contributing to efficient session management and enhanced user experiences. However, its use should be tempered with a keen awareness of security considerations, adherence to best practices, and a strategic approach to token management.

## 6. Session
A session is a way to store data on the server side to keep track of user interactions over multiple HTTP requests. Sessions are often used to maintain state and store information like user authentication status, user preferences, and other relevant data across different web pages.

### How Sessions Work
1. **Client Request:** When a user first accesses a website, the server creates a session and assigns a unique session ID.
2. **Session Storage:** The session ID is stored on the server, along with any data associated with the session.
3. **Session ID Transmission:** The session ID is sent to the client's browser, typically in a cookie.
4. **Subsequent Requests:** For each subsequent request, the client's browser sends the session ID back to the server, allowing the server to retrieve the stored session data.

**Installation**
```
npm install express express-session
```
**Example**
```js
const express = require('express');
// Middleware for managing sessions in Express.
const session = require('express-session');

const app = express();

app.use(session({
  secret: 'your-secret-key', // Secret key for signing the session ID cookie
  resave: false, // Forces the session to be saved back to the session store
  saveUninitialized: false, // Forces a session that is "uninitialized" to be saved to the store
  cookie: { secure: false } // Set to true if you're using HTTPS
}));

app.get('/', (req, res) => {
  if (req.session.views) {
    req.session.views++;
    res.send(`Number of views: ${req.session.views}`);
  } else {
    req.session.views = 1;
    res.send('Welcome to the session demo. Refresh the page!');
  }
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
```


## 7. Cookies
Cookies are small pieces of data sent from a website and stored on the user's browser. They are used to store information about the user or track their browsing activity.

### How Cookies Work
1. **Server Response:** When a user visits a website, the server can send one or more cookies to the user's browser.
2. **Cookie Storage:** The browser stores the cookies and sends them back to the server with each subsequent request to the same domain.
3. **Subsequent Requests:** The server can read the cookies sent by the browser to maintain state or track user activity.

**Installation**
```
npm install express cookie-parser
```

**Example**
```js
const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();

// Middleware for parsing cookies in Express.
app.use(cookieParser());

app.get('/', (req, res) => {
  // Object containing the cookies sent by the client's browser.
  if (req.cookies.views) {
    let views = parseInt(req.cookies.views) + 1;
    // Method to set a cookie on the client's browser.
    res.cookie('views', views);
    res.send(`Number of views: ${views}`);
  } else {
    res.cookie('views', 1);
    res.send('Welcome to the cookie demo. Refresh the page!');
  }
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
```

> ### Sessions vs Cookies

| Sessions | Cookies  |
|--|--|
| Data is stored on the server | Data is stored on the client's browser |
| Generally more secure as the data is stored on the server. Only the session ID is stored on the client side. | Less secure as the data is stored on the client side and can be manipulated. |
| Can store larger amounts of data on the server | Limited to 4KB of data per cookie |
| Typically expire when the user closes the browser or after a specified time period. | Can be persistent (stored until a set expiration date) or session-based (deleted when the browser is closed) |

## 8. Catching
- It stores frequently used data and instructions, So that the CPU can access them quickly, improving the overall speed and efficiency of the computer.
- When a request is made for the same data again, it can be quickly retrieved from the cache instead of going through the original, slower process of fetching or computing it again.

**Different types of caching mechanisms include:**

- **Browser Caching:** Stores resources like images, stylesheets, and scripts locally on the user’s device to speed up subsequent page loads.
- **Server-Side Caching:** Caches data on the server side to reduce database queries or expensive computations. Techniques include in-memory caching (e.g., Redis), file-based caching, and database query caching.
- **Content Delivery Network (CDN) Caching:** Stores copies of website content on servers distributed across multiple geographic locations to reduce latency and improve content delivery speed globally.
- **Database Caching:** Utilizes database-specific caching mechanisms like query caching or result caching to store frequently accessed data in memory for faster retrieval.

## Authorization Header

Authorization header is a crucial component of HTTP requests that plays a key role in authenticating and authorizing users or clients to access certain resources on a server.

The Authorization header is used to transmit credentials (such as tokens or API keys) from the client to the server. These credentials are then verified by the server to determine whether the client has the necessary permissions to access the requested resource.

The Authorization header typically follows this basic structure:

```
Authorization: <type> <credentials>

```

-   **Type:** Specifies the type of credentials being sent. Common types include "Bearer" for token-based authentication and "Basic" for basic authentication.
-   **Credentials:** The actual credentials, which could be a token, username and password combination, or other relevant information, depending on the chosen authentication type.

**Bearer Token Authentication Type:**

-   Example: `Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...`
-   Used in token-based authentication (e.g., JSON Web Tokens or OAuth), where a token represents the user's identity and permissions.

### How it Works:

1.  **Client Request:**
    -   The client includes the Authorization header in an HTTP request when accessing a secured resource.
2.  **Server Verification:**
    -   The server receives the request and extracts the credentials from the Authorization header.
3.  **Credential Verification:**
    -   The server verifies the credentials, usually by checking against a user database, validating a token, or using other authentication mechanisms.
4.  **Access Decision:**
    -   Based on the verification result, the server decides whether to grant or deny access to the requested resource.

### Example Code (Node.js using Axios):

```jsx
const axios = require('axios');

const url = '<https://api.example.com/resource>';
const token = 'your-access-token';

axios.get(url, {
  headers: {
    'Authorization': `Bearer ${token}`
  }
})
  .then(response => console.log(response.data))
  .catch(error => console.error('Error:', error));

```

In this example, the Bearer token is included in the Authorization header of an Axios HTTP GET request.

## **Cookies vs. Local Storage for Storing JWT Tokens:**

When it comes to storing JWT (JSON Web Tokens), both cookies and local storage are commonly used, but they have distinct characteristics and use cases. Here's a comparison to help you choose the appropriate option for your specific scenario:

### 1. **Cookies:**

-   **Security:**
    
    Cookies can be more secure than local storage because they have an additional security feature called HTTP-only. When a cookie is marked as HTTP-only, it cannot be accessed by JavaScript, reducing the risk of cross-site scripting (XSS) attacks.
    
-   **Automatic Handling:**
    
    Cookies are automatically sent with every HTTP request to the domain, including requests for images, stylesheets, and scripts. This automatic handling can be advantageous for authenticating API requests made by the browser.
    
-   **Expiration:**
    
    Cookies can have an expiration date, allowing the server to set a specific duration for which the token is valid. After expiration, the browser automatically removes the cookie.
    
-   **Domain Restriction:**
    
    Cookies can be set to be domain-restricted, meaning they are only sent to the server from the same domain that set the cookie. This provides a level of security.
    

### 2. **Local Storage:**

-   **Ease of Use:**
    
    Local storage is easier to use from a JavaScript perspective. You can set, get, and remove items directly using JavaScript without additional HTTP requests.
    
-   **Capacity:**
    
    Local storage generally has a larger storage capacity compared to cookies.
    
-   **No Automatic Handling:**
    
    Unlike cookies, local storage data is not automatically sent with every HTTP request. This means you need to manually attach the token to the headers of your API requests if you're using it for authentication.
    
-   **No Expiration Handling:**
    
    Local storage does not provide built-in expiration handling. If you want to implement token expiration, you need to manage it manually in your code.
    

**Choosing Between Cookies and Local Storage:**

-   **For Authentication:**
    
    Use cookies with HTTP-only flag for enhanced security, especially if you need to make authenticated API requests directly from the browser.
    
-   **For Client-Side Interactions:**
    
    Use local storage if you primarily need to access the token on the client side and manage API requests manually.
    
-   **Considerations:**
    
    Consider factors like security, automatic handling, and token expiration requirements when making your decision.
    

> In many cases, a combination of both cookies and local storage might be used. Cookies can be employed for secure, HTTP-only storage, while local storage can be used for easy client-side access.

## fetch() vs axios()

### Fetch API

1.  **Native Browser API:**
    -   `fetch` is a native JavaScript function built into modern browsers for making HTTP requests.
2.  **Promise-Based:**
    -   It returns a Promise, allowing for a more modern asynchronous coding style with `async/await` or using `.then()`.
3.  **Lightweight:**
    -   `fetch` is lightweight and comes bundled with browsers, reducing the need for external dependencies.

Example Usage:

```jsx
fetch('<https://api.example.com/data>')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));

```

### Axios

1.  **External Library:**
    -   Axios is a standalone JavaScript library designed to work in both browsers and Node.js environments.
2.  **Promise-Based:**
    -   Similar to `fetch`, Axios also returns a Promise, providing a consistent interface for handling asynchronous operations.
3.  **HTTP Request and Response Interceptors:**
    -   Axios allows the use of interceptors, enabling the modification of requests or responses globally before they are handled by `then` or `catch`.
4.  **Automatic JSON Parsing:**
    -   Axios automatically parses JSON responses, simplifying the process compared to `fetch`.

Example Usage:

```jsx
import axios from 'axios';

axios.get('<https://api.example.com/data>')
  .then(response => console.log(response.data))
  .catch(error => console.error('Error:', error));

```

### Comparison Points

1.  **Syntax:**

-   `fetch` uses a chain of `.then()` to handle responses, which might lead to a more verbose syntax. Axios, on the other hand, provides a concise syntax with `.then()` directly on the Axios instance.

2.  **Handling HTTP Errors:**

-   Both `fetch` and Axios allow error handling using `.catch()` or `.finally()`, but Axios may provide more detailed error information by default.

3.  **Interceptors:**

-   Axios provides a powerful feature with interceptors for both requests and responses, allowing global modifications. `fetch` lacks built-in support for interceptors.

4.  **Request Configuration:**

-   Axios allows detailed configuration of requests through a variety of options. `fetch` may require more manual setup for headers, methods, and other configurations.

5.  **JSON Parsing:**

-   Axios automatically parses JSON responses, while with `fetch`, you need to manually call `.json()` on the response.

6.  **Browser Support:**

-   `fetch` is natively supported in modern browsers, but if you need to support older browsers, you might need a polyfill. Axios has consistent behavior across various browsers and does not rely on native implementations.

7.  **Size:**

-   `fetch` is generally considered lightweight, being a part of the browser. Axios, being a separate library, introduces an additional file size to your project.

### Conclusion

-   **Use `fetch` when:**
    -   Working on a modern project without the need for additional features.
    -   Prefer a lightweight solution and have no concerns about polyfills.
-   **Use Axios when:**
    -   Dealing with more complex scenarios such as interceptors.
    -   Needing consistent behavior across different browsers.
    -   Desiring a library with built-in features like automatic JSON parsing.

> In summary, both `fetch` and Axios have their strengths, and the choice depends on the specific requirements and preferences of the project. `fetch` is excellent for simplicity and lightweight projects, while Axios provides additional features and consistent behavior across different environments.



# Databases

**Until now, we’ve been storing data in memory. This is bad for a few reasons:**

**1. Data can’t be dynamic:**

-   When data is stored in memory, it becomes volatile. Any updates or changes made to in-memory objects are temporary and get lost if the process restarts. In a real-world application, this limitation is significant because processes may restart due to various reasons, such as server maintenance, deployments, or unexpected crashes. As a result, any dynamically updated information will be lost, leading to inconsistencies and potential data loss.

**Example:**

-   Imagine an application that keeps track of user sessions or preferences. If this data is only stored in memory and the server restarts, all the user-related information would be reset, impacting the user experience.

**2. There are multiple servers in the real world:**

-   In a real-world application, especially those handling a significant user load or operating across multiple servers, relying solely on in-memory storage is impractical. Multiple servers may be used to distribute the load, enhance performance, and ensure high availability. When data is confined to the memory of a single server, it becomes challenging to maintain consistency and share data across the entire application infrastructure.

**Example:**

-   Consider an e-commerce platform with multiple servers handling user requests. If each server maintains its own set of in-memory data, it becomes challenging to synchronize and share information seamlessly across all servers, leading to potential discrepancies in the displayed data.

> Using databases, not just memory, is vital for strong, scalable apps. They ensure lasting, shared data across servers, maintaining consistency even after restarts.

**Data** is raw information that can be unprocessed or processed, and represented as text, numbers, or multimedia. 

**Database** is a collection of interrelated data that's organized so it can be easily accessed, managed, and updated.

## Types Of Databases

1.  **Graph Databases:**
    
    Graph databases specialize in representing and navigating relationships between entities, making them ideal for applications emphasizing connected data. _Example:_ Neo4j
    
2.  **Vector Databases:**
    
    Vector databases efficiently handle multidimensional and spatial relationships, particularly suited for applications dealing with spatial data. _Example:_ InfluxDB
    
3.  **SQL Databases:**
    
    SQL databases follow a structured query language, maintaining a tabular structure for organized data storage, retrieval, and manipulation. _Example:_ PostgreSQL
    
4.  **NoSQL Databases:**
    
    NoSQL databases offer flexibility in data modeling and are suitable for applications with evolving and diverse data needs. _Example:_ MongoDB
    

| SQL | NoSQL  |
|--|--|
| It is used to store and process data in relational databases.| Non-relational databases that use a non-tabular format to store data, rather than in rule-based,|
|Tabular form	|Key-value pairs, document-oriented, graph databases, or wide-column stores|
|**ACID** properties (Atomicity, Consistency, Isolation, Durability) for reliable transactions	|**BASE** properties (Basically Available, Soft state, Eventual consistency) less strict than ACID|
|Requires ORM (object-relational mapping)|Many do not require ORMs. MongoDB documents map directly to data structures in most popular programming languages.|
|Vertically scalable (It is harder to upgrade and may involve downtime) |Horizontally scalable (It is easier to upgrade and can handle large volumes of data)|
|MySQL, PostgreSQL, Oracle, SQL Server	|MongoDB, Cassandra, Couchbase, DynamoDB, Redi
|

**When to Choose SQL:**

- When you need complex transactions and relational data integrity.
- For applications requiring strict schema adherence.
- In scenarios where ACID compliance is critical for data consistency.

**When to Choose NoSQL:**

- When dealing with large volumes of data that doesn’t fit well in tabular forms.
- For projects requiring rapid development and iterations where the schema may frequently change.
- When the application demands high throughput and scalability across distributed systems.

### Why NoSQL is Used Over SQL

NoSQL is preferred over SQL in many cases because it offers more flexibility and scalability. The primary benefit of using a NoSQL system is that it provides developers with the ability to store and access data quickly and easily, without the overhead of a traditional relational database. As a result, development teams can focus on delivering features and core business logic faster, without worrying about the underlying data storage implementation. 

MongoDB is a distributed database which allows ad-hoc queries, real-time integration, and indexing efficient. Moreover, MongoDB is open-source and perfect for frequently changing data. It also offers server-side data validation.



## MongoDB

MongoDB is a powerful and versatile NoSQL database that revolutionizes data management with its flexible and scalable design. 

It stores data in flexible, schema-less documents, whereas relational databases use structured tables with fixed schemas.


Here's a breakdown of its key features:

1.  **Database Creation:**
    -   MongoDB allows users to create multiple databases, acting as distinct containers for organizing and storing data.
2.  **Collection Creation:**
    -   Within each database, collections serve as the equivalent of tables in relational databases. Collections provide a structured way to group and manage related documents.
3.  **JSON Data Storage:**
    -   MongoDB adopts a document-oriented data model, storing information in BSON (Binary JSON) format. This facilitates the storage of JSON-like documents in a flexible and readable manner.
4.  **Schemaless Design:**
    -   Unlike traditional relational databases, MongoDB is schemaless. This means documents within a collection can have varying structures, enabling easy adaptation to changing data requirements without rigid schema constraints.
5.  **Scalability:**
    -   MongoDB is designed for horizontal scalability, allowing for the distribution of data across multiple servers or clusters. This horizontal scaling ensures optimal performance as data volumes and user loads increase.
6.  **Versatility for Most Use Cases:**
    -   MongoDB's adaptability makes it a reliable choice for a diverse range of use cases. Whether handling complex data structures or large datasets, MongoDB can efficiently meet the demands of various applications.

> In essence, MongoDB provides a dynamic and scalable solution for modern data storage needs. Its schemaless design, JSON-based documents, and horizontal scalability make it well-suited for applications where flexibility, scalability, and diverse data types are crucial.

## Creating a free MongoDB instance

Creating a free MongoDB instance typically involves using MongoDB Atlas, the official cloud-based database service provided by MongoDB. Follow these step-by-step instructions to create a free MongoDB instance using MongoDB Atlas:

1.  **Visit MongoDB Atlas:**
    -   Open your web browser and go to the MongoDB Atlas website: [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).
2.  **Sign Up or Log In:**
    -   If you don't have an account, click on "Sign Up" to create a new account. If you already have an account, log in using your credentials.
3.  **Choose a Plan:**
    -   Once logged in, click on the "Get Started Free" button to initiate the process of creating a free MongoDB instance.
4.  **Fill in the Form:**
    -   Provide the required information in the sign-up form. This includes your email, username, and password.
5.  **Create an Organization:**
    -   After filling in your information, you'll be prompted to create an organization. Enter a name for your organization, and click "Next."
6.  **Create a Project:**
    -   Inside your organization, you'll create a project. Choose a name for your project, and click "Next."
7.  **Create a Cluster:**
    -   In the next step, you'll create a cluster. A cluster is a set of servers that will host your MongoDB databases. Choose the free tier (M0 Sandbox), and select your preferred cloud provider and region.
8.  **Configure Cluster Settings:**
    -   Configure additional settings for your cluster, such as the cluster name, additional features, and whether you want to enable backups. You can stick with the default settings for now.
9.  **Create Cluster:**
    -   Click the "Create Cluster" button. MongoDB Atlas will start creating your cluster, and this process may take a few minutes.
10.  **Wait for Cluster to Deploy:**
    -   Once the cluster is created, you'll see it in the MongoDB Atlas dashboard. Wait for the cluster to be deployed and become available.
11.  **Access Your Cluster:**
    -   Once your cluster is ready, click on the "CONNECT" button. You can then choose to connect using MongoDB Compass (a GUI tool) or connect using your application.
12.  **Whitelist Your IP Address:**
    -   Before connecting, you need to whitelist your IP address to ensure secure access. Click on the "Add Your Current IP Address" button.
13.  **Create a MongoDB User:**
    -   Create a MongoDB user by entering a username and password. This user will be used to connect to your MongoDB instance.
14.  **Connect to Your Cluster:**
    -   After creating the user, click on the "Choose a Connection Method" button and follow the instructions to connect to your MongoDB cluster.

You can now start using MongoDB for your applications.

## How does the backend connect to the database?

It does so by Express, JWT and Mongoose Libraries. Let's break down how the backend connects to the database using these libraries:

1.  **Express:**
    -   **Role:** Creates an HTTP server to handle requests and responses.
    -   **Connection to Database:** While Express itself doesn't directly connect to the database, it provides a framework for building the server. Endpoints/routes within Express handle requests, and these routes may involve interactions with the database using other libraries like Mongoose.
2.  **Jsonwebtokens (JWT) Library:**
    -   **Role:** Allows the creation and verification of JSON Web Tokens (JWT).
    -   **Connection to Database:** Typically, JWTs are used for authentication. Once a user is authenticated, the backend can include a JWT in the response. This token can be sent by the client in subsequent requests, allowing the backend to identify and authorize the user without the need to store session information on the server.
3.  **Mongoose:**
    -   **Role:** An Object Data Modeling (ODM) library for MongoDB and Node.js. It provides a structured way to interact with MongoDB.
    -   **Connection to Database:** Mongoose simplifies the process of connecting to MongoDB. It allows defining models, schemas, and provides methods for CRUD (Create, Read, Update, Delete) operations. The connection to the MongoDB database is established using Mongoose, providing a higher-level abstraction for working with MongoDB.

In summary, while Express sets up the server, JWT helps with user authentication, and Mongoose facilitates interaction with the MongoDB database. Together, these libraries form a robust backend infrastructure for handling HTTP requests, securing routes, and managing data in the database.

## Mongoose

Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js. It provides a higher-level, schema-based abstraction over the MongoDB JavaScript driver. Mongoose acts as a powerful bridge between Node.js applications and MongoDB databases. It streamlines the data modeling process, simplifies interactions with the database, and enhances the overall development experience when working with MongoDB in a Node.js environment.

**Connect to a MongoDB database using Mongoose**

```js
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/test') // test is the name of the database

const User = mongoose.model('User', { name: String, email: String, password: String });

const user = new User({
  name: 'Chandan Kushwaha',
  email: 'chandan@gmail.com',
  password: '12345'
});

user.save(); // save the user to the database
```