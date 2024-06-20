const express = require('express')
const router = express.Router()
const showController = require('../controllers/showController')
export {}

router.get('/', showController.getAllShows)
router.post('/', showController.addShowRecommendation)

module.exports = router