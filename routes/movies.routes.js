const router = require('express').Router()
const celebritieModel = require("../models/Celebrity.model");
const { findByIdAndRemove } = require('../models/Movie.model');
const movieModel = require("../models/Movie.model")

router.get("/movies/create", async (req, res, next) => {
    const allCelebs = await celebritieModel.find()
    const allMovies = await movieModel.find()    
     res.render("movies/new-movie", {allCelebs});
  });

  router.post("/movies/create", async (req, res) => {
    try {
        const body = req.body;
        await movieModel.create(body)
         res.redirect("/movies");
    }
    catch {
        res.render("movies/new-movie");
    }    
  });

  router.get("/movies", async (req, res, next) => {    
    const allMovies = await movieModel.find();   
     res.render("movies/movies", {allMovies});
  });

  router.get("/movies/:id", async (req, res) => {
    const Movie = await movieModel.findById(req.params.id).populate('cast')    
    res.render("movies/movie-details", Movie)
  })

  router.post("/movies/:id/delete", async (req, res) => {
    await movieModel.findByIdAndRemove(req.params.id)    
    res.redirect("/movies")
  })

  router.post("/movies/:id/edit", async (req, res) => { 
    const url = req.params.id  
    res.redirect(`/movies/${url}/edit`)
  })

  router.get("/movies/:id/edit", async (req, res) => {
    const Movie = await movieModel.findById(req.params.id)  
    const Celeb = await celebritieModel.find();  
    res.render("movies/edit-movie", {Movie, Celeb})
  })

  router.post("/movies/:id", async (req, res) => {
    const newMovie = await movieModel.findByIdAndUpdate(req.params.id, {...req.body})  
    res.redirect("/movies")
  })


module.exports = router;