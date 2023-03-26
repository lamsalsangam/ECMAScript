// server.js

const express = require("express");
const mongoose = require("mongoose");
const Todo = require("./models/todo");

const app = express();
const port = process.env.PORT || 3000;

mongoose.connect("mongodb://localhost/todo", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/api/todo", async (req, res) => {
  const todos = await Todo.find();
  res.json(todos);
});

app.post("/api/todo", async (req, res) => {
  const todo = new Todo({
    text: req.body.text,
  });
  await todo.save();
  res.json(todo);
});

app.delete("/api/todo/:id", async (req, res) => {
  await Todo.findByIdAndDelete(req.params.id);
  res.sendStatus(204);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
