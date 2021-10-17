const express = require('express');
const connectDB = require("./config/db");
const shortid = require("shortid");
const validUrl = require("valid-url");
const shortUrlRoute = require("./routes/shorturl")
const getShortUrlRoute = require("./routes/getshorturl")
const cors = require('cors');

const app = express();
connectDB();

const corsOptions = {
    origin: 'http://localhost:8080',
    optionsSuccessStatus: 200
}

app.use(cors(corsOptions))
app.use(express.json({}));
app.use("/", getShortUrlRoute)
app.use("/shorturl", shortUrlRoute);
const PORT = 8000;
app.listen(PORT, () => console.log("Server is listening on port " + PORT));
