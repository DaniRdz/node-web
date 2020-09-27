const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("index", {title: 'Node Web'});
});

router.get("/contact", (req, res) => {
  res.render("contact", { title: "Contact Page" });
});

module.exports = router;