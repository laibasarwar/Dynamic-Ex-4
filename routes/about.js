const express = require("express");
const router = express.Router();

router.use((req, res, next) => {
  console.log("Time: ", Date.now());
  next();
});

//define the home page route
router.get("/", (req, res) => {
  res.send("<div><h1>About Page</h1><h2>This page is about</h2>");
});

router.get("/me", (req, res) => {
  res.send("About me");
});

module.exports = router;
