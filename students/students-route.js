const express = require("express"),
  router = express.Router();

router.get("/", (req, res) => {
  res.status(200).send("Welcome to the Students Page!");
});
// router.insert('/')

// router.delete('/')
module.exports = router;
