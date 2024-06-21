const mongoose = require('mongoose')
const Schema = mongoose.Schema
export {}

const showSchema = new Schema({
    name: {type: String, required: true},
    format: {type: String, required: true},
    releaseYear: {type: Number, required: true},
    ongoing: {type: String, required: true},
    endYear: {type: Number, required: false},
    platform: [{type: String, required: true}],
    genre: [{type: String, required: true}],
    episodeCount: {type: Number, required: true},
    episodeLength: {type: Number, required: true},
    description: {type: String, required: true},
    submittedBy: {type: String, required: true}
}, { timestamps: true })

module.exports = mongoose.model('Show', showSchema, 'Shows')