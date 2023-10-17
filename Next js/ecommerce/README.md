Initial Setup

```bash
npx create-next-app@latest
```

PRISMA INIT

```bash
npm install prisma

npx prisma

npx prisma init
```

MONGODB

```bash
mongodb+srv://<username>:<password>@cluster0.5rwmlxf.mongodb.net/<name_of_database_if_any>?retryWrites=true&w=majority
```

Change the provoder in the schema.prisma file to the "mongodb"

Then to create the schema from the sample data that has been added in the mongodb collection just type:

```bash
npx prisma db pull
```

To make the changes in sync the one that we made in code to the mongodb atlas type:

```bash
npx prisma db push
```

Do:

```bash
npx prisma generate
```

to generate the prisma client which we can use to call our different database operation on. Whenever the changes are made in the schemas redo it so that the updated version of the modal can be used in the code.
