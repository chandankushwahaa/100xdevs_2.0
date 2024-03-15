
# Databases
Databases are essentially organized collections of structured data. They allow for efficient storage, retrieval, and manipulation of information on computer systems. 

## TYPES of Databases
### 1. Relational Databases
 These are the most widely used type and organize data into tables with rows and columns. Each table represents a specific entity (like customers or products) and columns represent attributes of that entity (like customer name or product price).  

 Examples: MySQL, Oracle Database, Microsoft SQL Server, PostgreSQL

 ![](https://questdb.io/img/glossary/relational-database/relational-database.webp) 

 ### 2. NoSQL Databases
 NoSQL databases offer more flexibility in data structure compared to relational databases. They are ideal for handling large, unstructured datasets or situations where data schema might change frequently.

 ### Types of NoSQL Databases:

- **Document Databases**: Store data in JSON-like documents, allowing for flexible schema. Good for storing complex data with varying structures. (Example: `MongoDB`)
![](https://kinsta.com/wp-content/uploads/2022/05/compass.png)

- **Key-Value Stores**: Simplest form, data is stored as key-value pairs. Very fast for retrieving data based on a specific key. (Example: `Redis`)
![](https://miro.medium.com/v2/resize:fit:1400/1*wmNbcyLgnA6CSvUSOfb5bw.png)

- **Column-Oriented Databases**: Store data by column instead of rows. Optimized for analytics workloads where you frequently query specific columns across large datasets. (Example: `HBase`)
![](https://www.tutorialandexample.com/wp-content/uploads/2020/01/HBase-Data-Model.png)

- **Graph Databases**: Store data as nodes (entities) and edges (relationships) between them. Useful for modeling interconnected data like social networks. (Example: `Neo4j`)
![](https://www.avolutionsoftware.com/wp-content/uploads/2018/08/Graph-Database.jpg.webp)

### 3. Vector Databases
Vector databases deal with representing data as multidimensional points. Imagine each data point in space, where each dimension holds a specific value. Vector databases excel at finding similar data points based on their proximity in this space. 

Example: Pinecone

![](https://imgs.search.brave.com/uki_3QTrfMl_PRXe9i9FBs3MffhhCFpUDZC4hoamiiM/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuZGF0YWNhbXAu/Y29tL2ltYWdlL3Vw/bG9hZC92MTY5NDUx/MTYyMS9pbWFnZTNf/YTU5M2VlNTdmNi5w/bmc)


## Choosing the better option depends on your specific needs:

### Use SQL if:
- You have a well-defined data model with structured data and complex queries involving joins.
- Data integrity and ACID (Atomicity, Consistency, Isolation, Durability) properties are crucial.
- You need a mature technology with established tools and support.

### Use NoSQL if:
- You have large or unstructured datasets that might change frequently.
- Scalability for massive data volumes is a top priority.
- Flexibility to adapt to evolving data models is essential.


<hr>


#  PRISMA - ORM  (Week 10.2)
 
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