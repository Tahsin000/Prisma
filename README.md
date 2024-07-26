# Prisma Practice Repository

## Overview

This repository contains the codebase and examples you need to get hands-on experience with Prisma. Whether you are a beginner or an experienced developer, you will find this repository useful in mastering the main components of Prisma and how to use them effectively.

## Features

- **Prisma Client**: A powerful query builder that allows you to interact with your database.
- **Prisma Migrate**: A tool for managing your data models and database migrations.
- **Prisma Studio**: A visual editor to view and edit your data.

## Learn

- Setting up a Prisma schema
- Working with relationships
- Interacting with the database using Prisma Client
- Updating and removing data
- Adding new records
- Upcoming use of Prisma in a Next.js course

## Getting Started

To get started with Prisma, follow these steps:

1. **Install Prisma**: Run the following command to install Prisma and its dependencies.
    ```bash
    npm install @prisma/client
    ```

2. **Initialize Prisma**: Set up your Prisma schema by running:
    ```bash
    npx prisma init
    ```

3. **Define Your Data Model**: Edit the `schema.prisma` file to define your data model.

4. **Migrate Your Database**: Apply your data model to the database.
    ```bash
    npx prisma migrate dev --name init
    ```

5. **Generate Prisma Client**: Generate the Prisma Client based on your data model.
    ```bash
    npx prisma generate
    ```

6. **Query Your Database**: Use the Prisma Client to query your database in your Node.js application.

## Example Code

Here is a simple example to get you started:

```javascript
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const allUsers = await prisma.user.findMany();
  console.log(allUsers);
}

main()
  .catch(e => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
```