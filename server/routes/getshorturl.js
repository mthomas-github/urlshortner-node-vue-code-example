const express = require("express");
const config = require("config");
const Url = require("../model/url");

const getShortUrlRoute = express.Router();

getShortUrlRoute.get('/:shortUrl', async (req, res) => {
    const shortUrlCode = req.params.shortUrl;
    const url = await Url.findOne({ urlCode: shortUrlCode });

    try {
        if (url) {
            return res.redirect(url.longUrl);
        } else {
            return res.status(400).json("Cannot Find Short URL");
        }
    }
    catch (err) {
        console.error("Error Getting Long URL" + shortUrlCode);
        return res.status(500).json("There was an Error");
    }
})

module.exports = getShortUrlRoute;