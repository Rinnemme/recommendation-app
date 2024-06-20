import { Request, Response } from "express"
const Movie = require('../models/movie')

exports.getAllMovies = async(req:Request,res:Response) => {
    const movies = await Movie.find({}).sort({name: 1})
    res.status(200).json(movies)
}