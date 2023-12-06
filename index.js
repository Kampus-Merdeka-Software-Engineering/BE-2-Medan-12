// Import
import express  from "express";
import rmRouter from '../BackEnd/app/routes/room.routes.js';
import uRouter from '../BackEnd/app/routes/user.routes.js';
import db from '../BackEnd/app/config/db.config.js';
import cors from 'cors';


const app = express();
const port = 5000;

db.sync({alter: true})
.then(()=>{ app.listen(port, () =>{
    console.log(`Running on Port ${port}`);
    })
})
.catch((err)=>{
    console.log(err)
})

app.get('/', (req, res) => {
    res.send('Server Online');
    console.log('Welcome');
});

app.use(express.json());
app.use(cors);
app.use('',rmRouter);
app.use('', uRouter);

