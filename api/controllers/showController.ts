import { Request, Response } from "express"
const Show = require('../models/show')

exports.getAllShows = async(req:Request,res:Response) => {
    const shows = await Show.find({}).sort({name: 1})
    res.status(200).json(shows)
}

exports.addShowRecommendation = async (req:Request, res:Response) => {
    const {name, releaseYear, format, ongoing, endYear, platform, genre, episodeCount, episodeLength, description, submittedBy} = req.body
    try {
        const team = await Show.create({name, releaseYear, format, ongoing, endYear, platform, genre, episodeCount, episodeLength, description, submittedBy})
        res.status(200).json(team)
    } catch (error:unknown) {
        if(error instanceof Error) {
            res.status(400).json({error: error.message})
        }
    }
}