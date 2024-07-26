# Getting Started with Prisma: A Comprehensive Guide
```
npm init -y
```

```
npm i --save-dev prisma typescript ts-node @types/node nodemon
```

```
npx prisma init --datasource-provider postgresql
```

```
npx prisma migrate dev --nam
```

```
$ npm i @prisma/client
```

```
npx prisma generate
```

```
import { PrismaClient } from '@prisma/client/edge'
const prisma = new PrismaClient()
```

```
  "scripts": {
    "devStart": "nodemon script.ts"
  },
```

``` 
import { PrismaClient } from '@prisma/client/edge'
const prisma = new PrismaClient()

async function main() {
    const user = await prisma.user.create({
        data: {
            name: 'Alice'
        }
    })
    console.log(user);
}

main()
.catch(e => {
    console.error(e.message)
})
.finally(async () => {
    await prisma.$disconnect()
})
```
