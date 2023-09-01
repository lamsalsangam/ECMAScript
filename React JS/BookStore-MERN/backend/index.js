import express from "express";
import { PORT } from "./configuration.js";

const app = express();

app.listen(PORT, () => {
  console.log(`App is listening in the PORT: ${PORT}`);
});
