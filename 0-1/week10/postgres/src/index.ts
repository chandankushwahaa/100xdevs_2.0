import { Client } from 'pg';

const client = new Client({
  connectionString: "ADD_YOUR_CONNECTION_STRING_HERE"
});

async function connectToDatabase() {
  try {
    await client.connect();
    console.log("Connected to database");
  } catch (error) {
    console.error("Error connecting to database:", error);
  }
}

// 1. create a new table in the database Run this only once
async function createUserTable(){
  await client.connect();
  const result = await client.query(`
    CREATE TABLE IF NOT EXISTS users (
      id SERIAL PRIMARY KEY,
      username VARCHAR(255) NOT NULL UNIQUE,
      name VARCHAR(255),
      email VARCHAR(255) UNIQUE NOT NULL,
      password VARCHAR(255) NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  `);
  await client.end();   // Close the connection
  console.log(result);
}
createUserTable();


// 2.  insert a new user into the database
async function insertUser(username: string, name: string, email: string, password: string) {
  try {
    const result = await client.query(`
      INSERT INTO users (username, name, email, password)
      VALUES ($1, $2, $3, $4)
      RETURNING *
    `, [username, name, email, password]);

    console.log("User inserted:", result.rows[0]);
  } catch (error) {
    console.error("Error inserting user:", error);
  }
}


// 3. Delete a user in the database
async function deleteUser(email: string) {
  try {
    const result = await client.query(`
      DELETE FROM users
      WHERE email = $1
      RETURNING *
    `, [email]);

    console.log("User deleted:", result.rows[0]);
  } catch (error) {
    console.error("Error deleting user:", error);
  }
}


// 4. get all users from the database
async function getUsers() {
  try {
    const result = await client.query(`
      SELECT * FROM users
    `);

    console.log("Users:", result.rows);
  } catch (error) {
    console.error("Error getting users:", error);
  }
}


connectToDatabase()
  .then(async () => {
    await insertUser("anshu2", "anshu", "anshu2@gmail.com", "12345")    // You can add more users here by calling this function multiple times with different values
    // await deleteUser("anshu2@gmail.com")
    // await getUsers()

    await client.end(); 
  }) 
  .catch((error) => {
    console.error("Error connecting to database:", error);
  });
