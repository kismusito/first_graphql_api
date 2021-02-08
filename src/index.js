import app from './app';
import './database';
require('dotenv').config();

(async () => {
    await app.listen(process.env.PORT);
    console.log(`App running on port ${process.env.PORT}`);
})()