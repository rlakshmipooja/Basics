import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("submit", (req, res) => {
  console.log(req.body);
});

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});

// we will be stop and start server every time we change the node file
// so we can use nodemon that will continuously listen to changes
