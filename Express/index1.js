import express from "express";
import cors from "cors";

const port = 5000;
const app = express();


// Use CORS middleware
app.use(cors());
app.use(express.json()); // to parse JSON body if needed

// Enable preflight response for all routes
app.options("*", cors());

app.get("/", (req, res) => {
  res.send("<h1>home</h1>");
});

app.post("/register", (req, res) => {
  res.sendStatus(201);
});

app.put("/user/pooja", (req, res) => {
  res.sendStatus(200);
});

app.patch("/user/pooja", (req, res) => {
  res.sendStatus(200);
});

app.delete("/user/pooja", (req, res) => {
  res.sendStatus(200);
});

app.listen(port, () => {
  console.log(`listening to port ${port}`);
});
