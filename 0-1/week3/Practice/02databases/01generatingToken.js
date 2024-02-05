// Authentication is the process of verifying the identity of a user. It is a process of confirming whether the user is genuine or not.
// Browser make a request to the server, server checks if the user is valid or not, if valid then it sends the response back to the browser by sending a token(long string).
// Token is store in the local storage of the browser.
// After successful login, in every request, the token is sent to the server. The server does not check the username and password again, it only checks the token.

// 1. Hashing - It is the process of converting a given key into another value. It is a one-way function, means once the key is hashed, it cannot be converted back to the original key.
// 2. Encryption - It is the process of converting a given key into another value. It is a two-way function, means once the key is encrypted, it can be converted back to the original key.
// 3. JSON web token (JWT) - It is a standard for creating access tokens that assert some number of claims. Token is store in the local storage of the browser (Application -> Local Storage).
//      For example, a server could generate a token that has the claim "logged in as admin" and provide that to a client.
//      The client could then use that token to prove that it is logged in as admin. The tokens are signed by the server's key, so the server is able to verify that the token is legitimate. The tokens are designed to be compact, URL-safe,
//      and usable especially in a web-browser single sign-on (SSO) context. JWT claims can be typically used to pass identity of authenticated users between an identity provider and a service provider, or any other type of claims as required by business processes.
// 4. Local Storage - It is a web storage object that allows data to be stored in the browser with no expiration date. The data will not be deleted when the browser is closed, and will be available the next day, week, or year.



//  Write a simple express server that has the following endpoints:
// 1. POST /signin - It takes a username and password in the request body and returns a JWT token if the user exists in the in memory database.
// 2. GET /users - It returns a list of users if the JWT token is valid. The list of users should not include the user whose token was used to make the request.

const e = require("express");
const express = require("express");

const jwt = require("jsonwebtoken");
const jwtPassword = "123456";
 
const app = express();
app.use(express.json());

const ALL_USERS = [
  {
    username: "harkirat@gmail.com",
    password: "123",
    name: "harkirat singh",
  },
  {
    username: "chandan@gmail.com",
    password: "12345",
    name: "Chandan Kushwaha",
  },
  {
    username: "sharmista@gmail.com",
    password: "12345",
    name: "Sharmista kumari",
  },
];

function userExists(username, password) {
  // write logic to return true or false if this user exists
  // in ALL_USERS array
  
  //return ALL_USERS.some((user) => user.username === username && user.password === password);
  let userExists = false;
  for(let i=0; i<ALL_USERS.length; i++){
      if(ALL_USERS[i].username === username && ALL_USERS[i].password === password){
          userExists = true;
      }
  }
  return userExists;

}

app.post("/signin", function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  if (!userExists(username, password)) {
    return res.status(403).json({
      msg: "User doesn't exist in our in memory db",
    });
  }

  var token = jwt.sign({ username: username }, jwtPassword);
  return res.json({
    token,
  });
});

app.get("/users", function (req, res) {
  const token = req.headers.authorization;
  try {
    const decoded = jwt.verify(token, jwtPassword);
    const username = decoded.username;
    // return a list of users other than this username
    
    // In header type - Authorization, value - paste the token
    res.json({
      user: ALL_USERS.filter(function(user){
        if(user.username !== username){
          return false;
        }
        else{
          return true;
        }
      })
    });

  } catch (err) {
    return res.status(403).json({
      msg: "Invalid token",
    });
  }
});

app.listen(3000);
