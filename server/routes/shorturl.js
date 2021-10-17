const express = require("express");
const shortid = require("shortid");
const validUrl = require("valid-url");
const config = require("config");
const Url = require("../model/url");

var shortUrlRoute = express.Router();

shortUrlRoute.post("/", async (req, res) => {
    const longUrl = req.body.longUrl;
    const baseUrl = config.get("Database.baseURL");

    if (!validUrl.isUri(baseUrl)) {
        return res.status(401).json("Internal error. Invalid baseURL.");
    }

    const shortUrlId = shortid.generate();

    if (validUrl.isUri(longUrl)) {

        try {
            const url = await Url.findOne({ longUrl: longUrl });

            if (url) {
                return res.status(200).json(url);
            } else {

                const shortUrl = baseUrl + "/" + shortUrlId;

                const url = new Url({
                    shortUrlId,
                    longUrl,
                    shortUrl,
                });
                await url.save()
                return res.status(201).json(url);
            }
        } catch (err) {
            console.error(err.message);
            return res.status(500).json("Internal Server error " + err.message);
        }
    } else {
        res.status(400).json({ message: 'Invalid URL. Try Again. Ex(https://www.google.com)' });
    }
});

module.exports = shortUrlRoute;
