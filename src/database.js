import mongoose from "mongoose";
require('dotenv').config();
const db = mongoose.connection;
const uri = process.env.URI;

(() => {
    mongoose.connect(uri, {
        useCreateIndex: true,
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useFindAndModify: false,
    });

    db.on("open", () => {
        console.log("Database connected");
    });

    db.on("error", (err) => {
        throw err;
    });
})();
