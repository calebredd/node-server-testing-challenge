const express = require("express"),
  router = express.Router();

router.get("/", (req, res) => {
  res.status(200).send("Welcome to the Faculty Page!");
});

// router.insert('/')

// router.delete('/')

module.exports = router;
