import { DataTypes } from 'sequelize';
import config from '../config/db.config.js'
// import config from '../config/database.js'

    const Room = config.define('rooms',{
        type: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        guest: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        img: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        price: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });
    export default Room;
