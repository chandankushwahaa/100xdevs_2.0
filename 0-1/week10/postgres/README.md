

> # Creating a Postgres Database

## 1. Using Neon DB
Make an account on [Neon](https://neon.tech/) and create a fresh project.

1. Initialise TypeScript Project
```
npm init -y
npm tsc --init
```
2. Create `src` and `dist` folder and inside `src` folder create `index.ts` file.

2. Change the `rootDir` and `outDir` in `tsconfig.json` file
```
"rootDir": "./src",
"outDir": "./dist",
```
3. Install the `pg` library and it’s types (because we’re using TS)

```
npm install pg
npm install @types/pg
```

4. Add follwing code to `src/index.ts` 

```js
import { Client } from 'pg';

const client = new Client({
  connectionString: "postgresql://neondb_owner:LN3bZAmtdIq0@ep-square-leaf-a1xnvvpp.ap-southeast-1.aws.neon.tech/week10postgres?sslmode=require"
});


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
  console.log(result);
}

createUserTable();
```

5. Build `ts` file to `js` 
```
tsc -b
```

6. Run `js` file
```
node dist/index.js
```

Table is created Check on neon website














## 2. Install and Run using Docker
- `docker pull postgres`

  - To download the latest PostgreSQL image from Docker Hub:

- `docker run --name my-postgres -e POSTGRES_PASSWORD=mysecretpassword -d -p 5432:5432 postgres`

  - `--name my-postgres`: Assigns the name “my-postgres” to the container.
  - `-e POSTGRES_PASSWORD=mysecretpassword`: Sets the PostgreSQL superuser password to “mysecretpassword”.
  - `-d`: Runs the container in detached mode (in the background).
  - `-p` 5432:5432: Maps port 5432 on your host machine to port 5432 inside the container (the default PostgreSQL port).

- `docker exec -it my-postgres psql -U postgres`

  - To interact with the container, you can use the `docker exec` command.This command connects you to the PostgreSQL instance running in the container as the “postgres” user

- CTRL + D
- `docker stop my-postgres`
    - To stop the postgres 
- `docker start my-postgres`
    - To start the postgres container
- `docker exec -it my-postgres psql -U postgres`




