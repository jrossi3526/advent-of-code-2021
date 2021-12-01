// Imports
import dotenv from "dotenv";
import { dirname } from "path";
import { fileURLToPath } from "url";
import express from "express";
import sonarSweep from "./day-1.js";

dotenv.config();

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();

app.get("/", (req, res) => {
  res.sendFile("index.html", { root: __dirname });
});

app.listen(process.env.PORT, () => {
  console.log(`Now listening on port ${process.env.PORT}`);
});

sonarSweep();
