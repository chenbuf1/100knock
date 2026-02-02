const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

// root
app.get("/", (req, res) => {
  // res.send("Hello, Render!");
  res.send("Hello, Render! Auto Deploy OK ");
});
// 94 Env variables
app.get("/env", (req, res) => {
  res.send(`MY_MESSAGE = ${process.env.MY_MESSAGE}`);
});


// /api/hello
app.get("/api/hello", (req, res) => {
  res.json({
    message: "Hello from /api/hello",
  });
});

// /about
app.get("/about", (req, res) => {
  res.send("This is the about page");
});


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
