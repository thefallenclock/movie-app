const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
    title: {type: String, required: true},
    director: {type: String, required: true},
    genre: String,
    releaseYear: Number,
    ratin: {type: number, min: 0, max: 10},
    duration: number,
    language: {type: String, default: 'English'},
    createAt: {}
});