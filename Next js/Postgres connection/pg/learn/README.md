# Learn

### Next Js Project [Using the PostgreSQL Database]

1. **Initialize a new Next.js project using the App Router**

   ```bash
   npx create-next-app@latest <project-name>

   cd <project-name>
   ```

2. Install the PostgreSQL client library

   ```bash
   npm install pg

   npm i --save-dev @types/pg
   ```

3. Create a new PostgreSQL database

   ```bash
   psql -c "CREATE DATABASE nextjs_postgres_crud;"
   ```

4. Create a user and grant it access to the new database

   ```bash
   psql -c "CREATE USER nextjs_postgres_crud WITH PASSWORD 'password';"
   psql -c "GRANT ALL ON DATABASE nextjs_postgres_crud TO nextjs_postgres_crud;"
   ```

5. **Creating the connection string.**

   - The connection string is a string that contains all the information needed to connect to your PostgreSQL database. It has the following format:

   ```bash
   postgresql://user:password@host:port/database
   ```

   - Replace the following values:

   * - user: The username of the PostgreSQL user you created in the previous step.
   * - password: The password of the PostgreSQL user.
   * - host: The hostname or IP address of the PostgreSQL server.
   * - port: The port number of the PostgreSQL server.
   * - database: The name of the PostgreSQL database.

   Once you have created a connection string, you can save it in a `.env` file in the root of your Next.js project. This will allow you to access the connection string from anywhere in your project.
