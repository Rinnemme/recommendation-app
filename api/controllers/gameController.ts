import { Request, Response } from "express"
const Game = require('../models/game')

exports.getAllGames = async(req:Request,res:Response) => {
    const games = await Game.find({}).sort({name: 1})
    res.status(200).json(games)
}

exports.addGameRecommendation = async (req:Request, res:Response) => {
    const {name, combat, releaseYear, price, steamLink, description, submittedBy} = req.body
    try {
        const game = await Game.create({name, combat, releaseYear, price, steamLink, description, submittedBy})
        res.status(200).json(game)
    } catch (error:unknown) {
        if(error instanceof Error) {
            res.status(400).json({error: error.message})
        }
    }
}