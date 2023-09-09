import express from "express";
import { Book } from "../model/bookModel.js";

const router = express.Router();

// Route for saving the new Book.
router.post("/", async (request, response) => {
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
router.get("/", async (request, response) => {
  try {
    const books = await Book.find({});
    response.sendStatus(200).send({ count: books.length, data: books });
  } catch (error) {
    console.log(error.message);
    response.sendStatus(500).send({ message: error.message });
  }
});

// Route for GET One book form the database by ID
router.get("/:id", async (request, response) => {
  try {
    const { id } = request.params;
    const book = await Book.findById(id);
    response.sendStatus(200).send(book);
  } catch (error) {
    console.log(error.message);
    response.sendStatus(500).send({ message: error.message });
  }
});

// Route for UPDATE book
router.put("/:id", async (request, response) => {
  try {
    if (
      !request.body.title ||
      !request.body.author ||
      !request.body.publishYear
    ) {
      response.sendStatus(400).send({
        message: "Send all required fields: title, author, publishYear",
      });
    }

    const { id } = request.params;
    const result = await Book.findByIdAndUpdate(id, request.body);
    if (!result) {
      response.sendStatus(404).send({ message: "Book not found." });
    }
    return response.status(200).send({ message: "Book updated successfully." });
  } catch (error) {
    console.log(error.message);
    response.sendStatus(500).send({ message: error.message });
  }
});

// Route to delete the book
router.delete("/:id", async (request, response) => {
  try {
    const { id } = request.params;
    const result = await findByIdAndDelete(id);
    if (!result) {
      return response.sendStatus(404).send({ message: "Book not found" });
    }
    return response
      .sendStatus(200)
      .send({ message: "Book deleted successfully" });
  } catch (error) {
    console.log(error.message);
    response.sendStatus(500).send({ message: error.message });
  }
});
