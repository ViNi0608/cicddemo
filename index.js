const express = require("express");
const app = express();
app.get("/", (req, res) => {
  res.send("Deployed automatically via GitHub Actions!");
});
app.listen(3000, () => {
  console.log("Server running on port 3000");
});
