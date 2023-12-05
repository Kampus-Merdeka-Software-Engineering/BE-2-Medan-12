import express, { json, urlencoded } from 'express';
import cors from 'cors';
const app = express();
const port = 5000;

import userRoute from './app/routes/user.routes.js';
import rsvRoute from './app/routes/reserve.routes.js';
import rmRoute from './app/routes/room.routes.js';

import db from './app/config/db.config.js';

app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));


app.get('/', (req, res) => {
    res.send('Server Online');
    console.log('Welcome');
});

app.use('/user', userRoute);

app.use('/reserve', rsvRoute);

app.use('/room', rmRoute);

app.listen(port, () => console.log(`App listening on port http://localhost:${port}!`));

