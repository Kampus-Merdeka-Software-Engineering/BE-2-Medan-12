import express, { json, urlencoded } from 'express';
import cors from 'cors';
const app = express();
const port = 5000;

import userRoute from './app/routes/user.routes.js';
import rsvRoute from './app/routes/reserve.routes.js';
import rmRoute from './app/routes/room.routes.js';

import db from './app/config/db.config.js';

import uRouter from './app/routes/user.routes.js';
import rsvRouter from './app/routes/reserve.routes.js';
import rmRouter from './app/routes/room.routes.js';

app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));


app.get('/', (req, res) => {
    res.send('Server Online');
});

app.use('', userRoute);

app.use('', rsvRoute);

app.use('', rmRoute);

app.listen(port, () => console.log(`App listening on port http://localhost:${port}!`));
