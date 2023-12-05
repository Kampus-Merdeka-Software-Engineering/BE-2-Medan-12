import sequelize  from "sequelize";
import dotenv from 'dotenv';
dotenv.config();


const db = new sequelize.Sequelize(process.env.DB_NAME,process.env.DB_USER,process.env.DB_PASSWORD,{
    host: process.env.DB_HOST,
    dialect: "mysql",
    port: process.env.DB_PORT
});

export default db;