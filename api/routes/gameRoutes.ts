const express = require('express')
const router = express.Router()
const gameController = require('../controllers/gameController')
export {}

router.get('/', gameController.getAllGames)
router.post('/', gameController.addGameRecommendation)

module.exports = router