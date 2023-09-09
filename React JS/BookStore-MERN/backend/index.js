import express, { request, response } from "express";
import mongoose from "mongoose";
import dotenv from "dotenv"; // Import 'dotenv' using ES6 module syntax
import booksRoute from "./routes/booksRoute.js";

dotenv.config(); // Load environment variables from .env file

const app = express();

const port = process.env.PORT;
app.use(express.json());

app.get("/", (request, response) => {
  return response.status(234).send("Welcome to the MERN Stack");
});

app.use("/books", booksRoute);

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("App connected to the database.");
    app.listen(port, () => {
      console.log(`App is listening on PORT: ${port}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
