import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  ////   create user
  // const user = await createUser("Tahsin", "tahsin@gmail.com");
  // console.log(user);

  //// get all user
  const users = await getAllUser();
  console.log(users);

  users.forEach((user: any) => {
    user.articles.forEach((article: any) => {
      printObjectData(article);
    });
  });

  //// Crete article
  //   const article = await createArticle("title3", "body1", 1);
  //   console.log(article);

  // Get article
  //   const articles = await getArticle();
  //   console.log(articles);

  //// Create User And Article
  //   const user_Article = await createUserAndArticle({
  //     name: "Tahsin",
  //     email: "tahsin2@gmail.com",
  //     title: "title3",
  //     body: "body1",
  //   });
  //   console.log(user_Article);

  //// Update User date
  // const user = await updateUser(1, "sourav");
  // console.log(user);

  //// delete article date
  // const article = await deleteArticle(2);
  // console.log(article);
}

interface TUser_TArticle {
  name: string;
  email: string;
  title: string;
  body: string;
}

// --------- print all object data just send params object
function printObjectData(obj: any) {
  if (typeof obj !== "object" || obj === null) {
    throw new Error("Parameter must be a non-null object");
  }

  Object.entries(obj).forEach(([key, value]) => {
    console.log(`${key}: ${value}`);
  });
}

// --------- Create User And Article
async function createUserAndArticle(info: TUser_TArticle) {
  const user = await prisma.user.create({
    data: {
      name: info.name,
      email: info.email,
      articles: {
        create: {
          title: info.title,
          body: info.body,
        },
      },
    },
  });
  return user;
}

// --------- Create user
async function createUser(name: string, email: string) {
  const user = await prisma.user.create({
    data: {
      name: name,
      email: email,
    },
  });
  return user;
}

// --------- Get all user
async function getAllUser() {
  const user = await prisma.user.findMany({
    include: {
      articles: true,
    },
  });
  return user;
}

// --------- Create artcle
async function createArticle(title: string, body: string, id: number) {
  const article = await prisma.article.create({
    data: {
      title,
      body,
      author: {
        connect: {
          id,
        },
      },
    },
  });
  return article;
}

// --------- Get article
async function getArticle() {
  const articles = await prisma.article.findMany();
  return articles;
}

// --------- Update user data
async function updateUser(id: number, name: string) {
  const user = await prisma.user.update({
    where: {
      id,
    },
    data: {
      name,
    },
  });
  return user;
}

// --------- delete article
async function deleteArticle(id: number) {
  const article = await prisma.article.delete({
    where: {
      id,
    },
  });
  return article;
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
