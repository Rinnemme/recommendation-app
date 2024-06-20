const express = require('express')
const router = express.Router()
const movieController = require('../controllers/movieController')
export {}

router.get('/', movieController.getAllMovies)
router.post('/', movieController.addMovieRecommendation)

module.exports = router