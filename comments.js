// Create web server
// 1. Create a web server
// 2. Create a route for GET /comments
// 3. Create a route for POST /comments
// 4. Create a route for GET /comments/:id
// 5. Create a route for DELETE /comments/:id
// 6. Create a route for PUT /comments/:id

// 1. Create a web server
const express = require("express");
const app = express();
const port = 5000;
const cors = require("cors");
app.use(cors());

// 2. Create a route for GET /comments
// 3. Create a route for POST /comments
// 4. Create a route for GET /comments/:id
// 5. Create a route for DELETE /comments/:id
// 6. Create a route for PUT /comments/:id

const comments = [
  { id: 1, name: "John", comment: "Hello World" },
  { id: 2, name: "Mary", comment: "Hi, there" },
];

// 2. Create a route for GET /comments
app.get("/comments", (req, res) => {
  res.send(comments);
});

// 3. Create a route for POST /comments
app.use(express.json());
app.post("/comments", (req, res) => {
  const comment = req.body;
  comment.id = comments.length + 1;
  comments.push(comment);
  res.send(comments);
});

// 4. Create a route for GET /comments/:id
app.get("/comments/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const comment = comments.find((comment) => comment.id === id);
  res.send(comment);
});

// 5. Create a route for DELETE /comments/:id
app.delete("/comments/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const comment = comments.find((comment) => comment.id === id);
  const index = comments.indexOf(comment);
  comments.splice(index, 1);
  res.send(comments);
});

// 6. Create a route for PUT /comments/:id
app.put("/comments/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const comment = comments.find((comment) => comment.id === id);