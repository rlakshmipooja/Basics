import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";

const app = express();
const port = 5000;
var bandName = "";

const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(bodyParser.urlencoded({ extended: true }));

function generateBandName(req, res, next) {
  console.log(req.body);
  bandName = req.body["street"] + " " + req.body["pet"];
  next();
}

app.use(generateBandName);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit", (req, res) => {
  res.send(`<h2>band name: ${bandName}</h2>`);
});

app.listen(port, () => {
  console.log(`listening to ${port}`);
});
