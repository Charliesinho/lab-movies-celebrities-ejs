const router = require("express").Router();

/* GET home page */
router.get("/index", (req, res, next) => {
  res.render("index");
});

module.exports = router;
