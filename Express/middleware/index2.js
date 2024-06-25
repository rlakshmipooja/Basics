import express from "express";

const app = express();
const port = 3000;

const logger = (req, res, next) => {
  console.log("request method", req.method);
  console.log("request url", req.url);
  next();
};

app.use(logger);

app.get("/", (req, res) => {
  res.send("hello");
});

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
