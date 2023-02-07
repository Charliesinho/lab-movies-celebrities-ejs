const router = require('express').Router()
const celebritieModel = require("../models/Celebrity.model")

  router.get("/celebrities/create", (req, res, next) => {
    res.render("celebrities/new-celebrity");
  });

  router.post("/celebrities/create", async (req, res) => {
    try {
        const body = req.body;
        await console.log({body})
        await celebritieModel.create(body)
        await console.log("Lets fucking go!")
        res.redirect("/celebrities/create");
    }
    catch {
        res.render("celebrities/new-celebrity");
    }    
  });

  router.get("/celebrities", async (req, res, next) => {
      const allcelebrities = await celebritieModel.find()
     console.log(allcelebrities)
    res.render("celebrities/celebrities", {allcelebrities});
  });

module.exports = router;