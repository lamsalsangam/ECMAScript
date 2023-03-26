// models/todo.js

const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  text: String,
});

const Todo = mongoose.model("Todo", todoSchema);

module.exports = Todo;
