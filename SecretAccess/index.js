import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 5000;
var isAuthorized = false;

app.use(bodyParser.urlencoded({ extended: true }));

function checkPwd(req, res, next) {
  const pwd = req.body["password"];
  if (pwd === "ILoveProgramming") {
    isAuthorized = true;
  }
  next();
}

app.use(checkPwd);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/check", (req, res) => {
  if (isAuthorized) {
    res.sendFile(__dirname + "/public/secret.html");
  } else {
    res.sendFile(__dirname + "/public/index.html");
  }
});

app.listen(port, () => {
  console.log(`listening to ${port}`);
});
