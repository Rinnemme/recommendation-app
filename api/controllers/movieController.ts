import { Request, Response } from "express"
const Movie = require('../models/movie')

exports.getAllMovies = async(req:Request,res:Response) => {
    const movies = await Movie.find({}).sort({name: 1})
    res.status(200).json(movies)
}

exports.addMovieRecommendation = async (req:Request, res:Response) => {
    const {name, releaseYear, format,  platform, genre, director, starring, length, description, submittedBy} = req.body
    try {
        const team = await Movie.create({name, releaseYear, format,  platform, genre, director, starring, length, description, submittedBy})
        res.status(200).json(team)
    } catch (error:unknown) {
        if(error instanceof Error) {
            res.status(400).json({error: error.message})
        }
    }
}