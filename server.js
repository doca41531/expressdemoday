const express = require("express");
const path = require("path");
const app = express();
const port = 5500;

app.use(express.static(path.join(__dirname, "map")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "map", "main.html"));
});

app.listen(port, () => {
  console.log(`서버가 실행됩니다. http://localhost:${port}`);
});