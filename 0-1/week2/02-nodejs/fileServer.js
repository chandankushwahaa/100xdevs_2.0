/**
  You need to create an express HTTP server in Node.js which will handle the logic of a file server.
  - Use built in Node.js `fs` module
  The expected API endpoints are defined below,
  1. GET /files - Returns a list of files present in `./files/` directory
    Response: 200 OK with an array of file names in JSON format.
    Example: GET http://localhost:3000/files
  2. GET /file/:filename - Returns content of given file by name
     Description: Use the filename from the request path parameter to read the file from `./files/` directory
     Response: 200 OK with the file content as the response body if found, or 404 Not Found if not found. Should return `File not found` as text if file is not found
     Example: GET http://localhost:3000/file/example.txt
    - For any other route not defined in the server return 404
    Testing the server - run `npm run test-fileServer` command in terminal
 */

const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();

const dir = path.join(__dirname, "./files");

// Endpoint to get the list of files
app.get("/files", (req, res) => {
  // Read directory asynchronously
  fs.readdir(dir, (err, files) => {
    if (err) {
      // If there's an error reading the directory, return 500 Internal Server Error
      return res.status(500).send("Internal Server Error");
    }
    // If successful, return the list of files as JSON
    res.status(200).json(files);
  });
});

// Endpoint to get content of a specific file by name
app.get("/file/:filename", function (req, res) {
  const { filename } = req.params;
  const filepath = path.join(dir, filename); // Construct full file path

  // Read file asynchronously
  fs.readFile(filepath, "utf8", (err, data) => {
    if (err) {
      // If file is not found, return 404 File Not Found
      return res.status(404).send("File not found");
    }
    // If file is found, return its content
    res.send(data);
  });
});

// Handling undefined routes with a 404 Not Found
app.use((req, res) => {
  res.status(404).send("Route not found");
});

module.exports = app;
