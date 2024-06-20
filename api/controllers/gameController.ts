import { Request, Response } from "express"
const Game = require('../models/game')

exports.getAllGames = async(req:Request,res:Response) => {
    const games = await Game.find({}).sort({name: 1})
    res.status(200).json(games)
}