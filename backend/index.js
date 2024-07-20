import express from "express";
import {PORT, mongoDBURL} from "./config.js";
import mongoose from "mongoose";
import booksRoute from "./routes/booksRoute.js";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  console.log(req);
  return res.status(234).send("welcome to the homepage");
});

app.use("/books", booksRoute);

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => console.log(err));
