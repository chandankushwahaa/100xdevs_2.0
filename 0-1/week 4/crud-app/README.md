 # CRUD Operations with Express and MongoDB

This is a simple Express application demonstrating CRUD (Create, Read, Update, Delete) operations using MongoDB as the database.

## Prerequisites

- Node.js installed on your machine
- MongoDB Atlas account or a locally running MongoDB instance
- Basic knowledge of HTTP methods and RESTful APIs

## Getting Started

1. Clone this repository to your local machine.
2. Install dependencies by running `npm install`.
3. Provide your MongoDB connection URI.
4. Start the application by running `npm run dev`.

## Dependencies
- **express**: Express is a fast, unopinionated, minimalist web framework for Node.js. It simplifies the process of building web applications and APIs.

- **mongodb**: MongoDB is a NoSQL database program, which uses JSON-like documents with optional schemas.

- **mongoose:** Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js. It provides a straightforward, schema-based solution to model application data.

- **nodemon:** Nodemon is a utility that monitors for changes in your source code and automatically restarts the server. It's useful during development to streamline the development process.

## Endpoints
## GET /api/products

Fetches all products from the database.

**Example:**

```json
http://localhost:3000/api/products/
```

## POST /api/products
Creates a new product in the database.

Request Body:

```json
POST /api/products
Content-Type: application/json

{
  "name": "New Product",
  "quantity": 4,  
  "price": 20.99,
}
```

## PUT /api/product/:id
Updates an existing product in the database.

Request Parameters:

id: The ID of the product to be updated.

```json
PUT /api/product/60aebb7e4a8ae50f9c24b0a1
Content-Type: application/json

{
  "name": "Updated Product",
  "quantity": 4,
  "price": ,
}

```

## DELETE /api/product/:id
Deletes a product from the database.

Request Parameters:

id: The ID of the product to be deleted.

```json
DELETE /api/product/60aebb7e4a8ae50f9c24b0a1

```