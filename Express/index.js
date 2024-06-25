import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("/public/index.html");
});

app.get("/about", (req, res) => {
  res.send("<h1>about</h1>");
});

app.get("/contact", (req, res) => {
  res.send("<h1>contact</h1>");
});

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});

// we will be stop and start server every time we change the node file
// so we can use nodemon that will continuously listen to changes
