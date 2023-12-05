import {Sequelize} from 'sequelize';

const db = new Sequelize('db_cospace','root','',{
    HOST: '127.0.0.1',
    USER: 'root',
    PASSWORD: '', // Isi dengan kata sandi database Anda jika ada
    DB: 'db_cospace',
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
    },
});

export default db;
