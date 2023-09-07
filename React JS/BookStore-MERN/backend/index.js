import express, { response } from "express";
import mongoose from "mongoose";
import dotenv from "dotenv"; // Import 'dotenv' using ES6 module syntax
import { Book } from "./model/bookModel.js";

dotenv.config(); // Load environment variables from .env file

const app = express();

const port = process.env.PORT;
app.use(express.json());

app.get("/", (request, response) => {
  return response.status(234).send("Welcome to the MERN Stack");
});

// Route for saving the new Book.
app.post("/books", async (request, response) => {
  try {
    if (
      !request.body.title ||
      !request.body.author ||
      !request.body.publishYear
    ) {
      return response.status(400).send({
        message: "Send all required fields: title, author, publishYear",
      });
    }
    const newBook = {
      title: request.body.title,
      author: request.body.author,
      publishYear: request.body.publishYear,
    };

    const book = await Book.create(newBook);
    response.status(201).send(book);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Route for GET All books form the database
app.get("/books", async (request, response) => {
  try {
    const books = await Book.find({});
    response.sendStatus(200).send({ count: books.length, data: books });
  } catch (error) {
    console.log(error.message);
    response.sendStatus(500).send({ message: error.message });
  }
});

// Route for GET One book form the database by ID
app.get("/books/:id", async (request, response) => {
  try {
    const { id } = request.params;
    const book = await Book.findById(id);
    response.sendStatus(200).send(book);
  } catch (error) {
    console.log(error.message);
    response.sendStatus(500).send({ message: error.message });
  }
});

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
