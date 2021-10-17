const mongoose = require('mongoose');
const config = require('config');
const db = config.get('Database.mongoURI');

const connectDB = async () => {
    try {
        await mongoose.connect(db, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("Connected to Mongo DB");
    } catch (error) {
        console.error('There was a Problem Connecting: ', error);
    }
}

module.exports = connectDB;