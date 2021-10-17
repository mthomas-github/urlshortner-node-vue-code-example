const mongoose = require('mongoose');

const urlSchema = new mongoose.Schema({
    shortUrlId: String,
    longUrl: String,
    shortUrl: String,
});

module.exports = mongoose.model("url", urlSchema);