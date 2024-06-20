const mongoose = require('mongoose')
const Schema = mongoose.Schema
export {}

const gameSchema = new Schema({
    name: {type: String, required: true},
    genre: [{type: String, required: true}],
    combat: {type: String, required: true},
    releaseYear: {type: Number, required: true},
    price: {type: Number, required: true},
    steamLink: {type: String, required: true},
    description: {type: String, required: true},
    submittedBy: {type: String, required: true}
})

module.exports = mongoose.model('Game', gameSchema, 'Games')