const express = require("express");
const path = require("path");
const app = express();
const port = 5500;

const router = require("./views/map.js");

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.static(path.join(__dirname, "views")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "main.html"));
});

app.listen(port, () => {
  console.log(`서버가 실행됩니다. http://localhost:${port}`);
});

app.use("/api", router);