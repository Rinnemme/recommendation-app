const mongoose = require('mongoose')
const Schema = mongoose.Schema
export {}

const movieSchema = new Schema({
    name: {type: String, required: true},
    releaseYear: {type: Number, required: true},
    format: {type: String, required: true},
    platform: [{type: String, required: true}],
    genre: [{type: String, required: true}],
    director: {type: String, required: true},
    starring: [{type: String, required: true}],
    length: {type: Number, required: true},
    description: {type: String, required: true},
    submittedBy: {type: String, required: true}
}, { timestamps: true })

module.exports = mongoose.model('Movie', movieSchema, 'Movies')
