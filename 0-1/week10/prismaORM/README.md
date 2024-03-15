
#  PRISMA - ORM
 
 > ## Object Relational Mapping (ORM)
ORM is a technique used in creating a "bridge" between object-oriented programs and, in most cases, relational databases.

Imagine you have a big warehouse (database) with lots of boxes (tables) filled with stuff (data). Now, you also have a system for organizing things in your head (programming language) where things are grouped by category (objects).

An ORM, or Object-Relational Mapper, acts like a translator between these two systems. It lets you work with the warehouse (database) using the way you organize things in your head (programming language).

Here's how it works:

- You tell the ORM about the categories (objects) in your system and what information they hold.
- The ORM then figures out how this translates to the boxes and labels in the warehouse (tables and columns in the database).
- When you want to add something new, the ORM takes your category (object) and puts it in the right box (table) in the warehouse (database).
- Similarly, if you want to find something specific, the ORM translates your search in your category system (programming language) to finding the right box (table) and item (data) in the warehouse (database).

## ORM Tools for Nodejs
An ORM tool is software designed to help OOP developers interact with relational databases. So instead of creating your own ORM software from scratch, you can make use of these tools.
- Prisma
- Sequelize
- TypeORM
- Objection.js
- Mikro-ORM

> ## Prisma
Prisma is a new kind of ORM tool that simplifies how you interact with databases in your code. It acts as a bridge between your programming language and the database, allowing you to write code that's easier to understand and maintain.

Prisma can work with different types of databases, like PostgreSQL, MySQL, and MongoDB. So it's flexible and can adapt to your needs.

> ##  Installation Prisma

* You can use neon, aiven, subabase, elephantSQL or run it locally
 
### 1. Using Neon database

 1. Initialize node project
 ```
 npm init -y 
 ```
  2. Add dependencies
  ```
  npm install prisma typescript ts-node @types/node --save-dev
  ```
  3. Init Typescript
  
  ```
	npx tsc --init
	Change `rootDit` to `src`
	Change `outDir` to `dist`
 ```
 4. Initialize Prisma

```
npx prisma init
```
It will generate a folder Prisma with `schema.prisma` in it. All we have to make changes inside it.


### 2. Select Database

Inside `prisma/schema.prisma`

```js
generator  client  {
provider  =  "prisma-client-js"
}

datasource  db  {
provider  =  "postgresql"
url  =  "PASTE_NEON_DB_LINK"
}
```
`provider` is the database name you can change it to `mongodb`
, `mysql`. Its depends upon you that which database you want to use in your project

Add below code to it
```sql
model User {
  id         Int      @id @default(autoincrement())
  username   String   @unique
  password   String
  firstName  String?
  lastName   String
}

model Todo {
  id        String @id @default(uuid())
  title     String
  completed Boolean @default(false)
  description String
  userId    Int
}
```
- > ? is optional field user can either skip or fill it. 
#### 3. Generate migrations
You have created a single schema file. You haven’t yet run the `CREATE TABLE` commands. To run those and create `migration files` , run

``` 
npx prisma migrate dev --name UserisAdded 
```

As you run this command  `User` and `Todo` table will be created you can check it on neon website.

### Let's Revise
1. Create `schema.prisma` file
2. Run a command to generate migration folder. It migrate the SQL database.
3. It generate a Client i.e- User class, Todo class that we can use in our `src/index.ts` file
4. We can now use `User.find({})` in `src/index.ts` file and under the hood this User and Todo create SQL queries.

#### 4. Generate Client

 ```
npx prisma generate 
```

Now your are good to go now you can make changes in your `src/index.ts` file like INSERTING, DELETING, UPDATING and so on. 

## Make Changes in `src/index.ts` file

```js
import  { PrismaClient }  from  "@prisma/client";

const prisma =  new  PrismaClient();

// inserting a user
async  function  insertUser(email:  string, name:  string, password:  string){
	const res =  await prisma.user.create({
	data:  {
		email: email,
		name: name,
		password: password
	},
	select:{
		id:  true,
		password:  true
	},
});
console.log(res);
}

insertUser("chandan@gmail.com",  "Chandan",  "12345");
// insertUser("chandan2@gmail.com",  "Chandan2",  "12345");

```

### Run `src/index.ts` file
```
tsc -b
```
OR
```
npx tsc -b
```

It will generate a `index.js` file inside dist folder.

```
node dist/index.js
```
It will result the OUTPUT `ID and PASSWORD`

<hr>