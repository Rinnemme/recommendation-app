import { Request, Response } from "express"
const Show = require('../models/show')

exports.getAllShows = async(req:Request,res:Response) => {
    const shows = await Show.find({}).sort({name: 1})
    res.status(200).json(shows)
}