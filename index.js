// Import
import express  from "express";
import rmRouter from '../BackEnd/app/routes/room.routes.js'
import db from '../BackEnd/app/config/database.js'

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

app.use('/',rmRouter);

;

