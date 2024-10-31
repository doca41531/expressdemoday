const express = require("express");
const path = require("path");
const router = express.Router();

router.get("/:lct", (req, res) => {
  let location = req.params.lct;

  res.render("map", { location: location });
});

module.exports = router;