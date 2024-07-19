import express from "express";
import {PORT, mongoDBURL} from "./config.js";

const app = express();

app.get("/", (req, res) => {
  console.log(req);
  return res.status(234).send("welcome to the homepage");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
