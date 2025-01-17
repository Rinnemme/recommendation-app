import { Application, Request, Response } from "express"
const mongoose = require('mongoose')
const gameRoutes = require('./routes/gameRoutes')
const movieRoutes = require('./routes/movieRoutes')
const showRoutes = require('./routes/showRoutes')
require ('dotenv').config()

const express = require('express')

const app:Application = express()

app.get('/', (req:Request, res:Response) => {
    res.json({mssg: 'API Home!'})
})

app.use(express.json())
app.use('/games', gameRoutes)
app.use('/movies', movieRoutes)
app.use('/shows', showRoutes)

mongoose.connect(process.env.MONGO_URI, {dbName: 'Recommendation-App'})
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log('connected & listening on port', process.env.PORT)
        })
    })
    .catch((error:Error) => {
        console.log(error)
    })