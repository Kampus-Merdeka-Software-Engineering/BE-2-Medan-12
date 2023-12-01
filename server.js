const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

const userRoute = require('./app/routes/user.routes.js');
const rsvRoute = require('./app/routes/reserve.routes.js');
const db = require('./app/config/db.config.js')

const uRouter = require('./app/routes/user.routes.js');
const rsvRouter = require('./app/routes/reserve.routes.js');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/', (req, res) => {
    res.send('Server Online');
});

app.use(`/user`, userRoute);

app.use(`/rsv`, rsvRoute);


app.listen(port, () => console.log(`App listening on port http://localhost:${port}!`));
