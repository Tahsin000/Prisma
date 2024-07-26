import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient(); //{ log: ["query"] }

async function main() {
  const use = await prisma.user.findUnique({
    where: {
      age_name: {
        age: 17,
        name: "Kyle",
      },
    },
  });
  console.log(use);
  // const user = await prisma.user.createMany({
  //   data: [
  //     {
  //       name: "Kyle",
  //       email: "Hjy3K@example.com",
  //       age: 27,
  //     },
  //     {
  //       name: "asd",
  //       email: "asd@example.com",
  //       age: 21,
  //     },
  //   ],
  //   // select: {
  //   //   name: true,
  //   //   userPreference: { select: { id: true } },
  //   // },
  //   // include:{
  //   //   userPreference: true,
  //   // }
  // });
  // console.log(user);

  // DELETE ALL DATA
  // await prisma.user.deleteMany();
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
