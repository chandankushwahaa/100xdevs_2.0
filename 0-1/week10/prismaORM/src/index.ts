import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// 1. Create a new user
async function insertUser(email: string, name: string, password: string){
  const res = await prisma.user.create({
    data: {
      email: email,
      name: name,
      password: password
    },
    select:{
      id: true,
      password: true,
      name: true,
    },
  });
  console.log(res);
}

insertUser("chandan2@gmail.com", "Chandan2", "12345");


// 2. Update user
// async function updateUser(email: string, name: string){
//   const res = await prisma.user.update({
//     where: { email: email },
//     data: { name: name },
//   });
//   console.log(res);
// }

// updateUser("chandan2@gmail.com", "ChandanUpdated");


// 3. Delete user
// async function deleteUser(email: string){
//   const res = await prisma.user.delete({
//     where: { email: email },
//   });
//   console.log(res);
// }

// deleteUser('sunny@gmail.com');


// 4. Fetch all users
// async function fetchAllUsers(){
//   const res = await prisma.user.findMany();
//   console.log(res);
// }

// fetchAllUsers();


// 5. Fetch user by email if exists else return null
// async function fetchUserByEmail(email: string){
//   const res = await prisma.user.findUnique({
//     where: { email: email },
//   });
//   console.log(res);
// }

// fetchUserByEmail('chandan@gmail.com');



