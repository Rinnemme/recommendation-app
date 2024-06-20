const express = require('express')
const router = express.Router()
const showController = require('../controllers/showController')
export {}

router.get('/', showController.getAllShows)

module.exports = router