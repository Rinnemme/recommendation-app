import { Application, Request, Response } from "express"
require ('dotenv').config()

const express = require('express')

const app:Application = express()

app.get('/', (req:Request, res:Response) => {
    res.json({mssg: 'Hello World!'})
})

app.listen(process.env.PORT, () => {
    console.log(`Listening on ${process.env.PORT}`)
})