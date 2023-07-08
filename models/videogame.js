const mongoose = require('./connection');

const gameSchema = new mongoose.Schema({
    name: String,
    publisher: String,
    yearReleased: Number,
    image: String,
    briefDescription: String,
    username: String
});

const Game = mongoose.model('game', gameSchema);

module.exports = Game