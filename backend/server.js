const express = require("express");
const notes = require("./data/notes.js");
const dotenv = require("dotenv");

const app = express();

dotenv.config();
const PORT = process.env.PORT;
app.get("/", (req, res) => {
  res.send(notes);
});

app.get("/app/notes/:id", (req, res) => {
  const note = notes.find((n) => n._id === req.params.id);

  res.send(note);
});

app.listen(PORT, console.log(22));
