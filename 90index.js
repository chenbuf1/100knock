const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  // res.send("Hello, Render!");
  res.send("Hello, Render! Auto Deploy OK ");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
