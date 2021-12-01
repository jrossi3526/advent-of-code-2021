// Imports
import express from "express";
import sonarSweep from "./day-1.js";

const app = express();
const port = 8000;

app.get("/", (req, res) => {
  res.sendFile("index.html", { root: __dirname });
});

app.listen(port, () => {
  console.log(`Now listening on port ${port}`);
});

console.log("test");

sonarSweep();
