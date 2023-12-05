                                                                                                                                                           import { DataTypes } from 'sequelize';
import config from '../config/db.config.js'

    const Reserve = config.define('reservation',{
        checkin: {
            type: DataTypes.DATEONLY,
            allowNull: false,
        },
        checkout: {
            type: DataTypes.DATEONLY,
            allowNull: false,
        },
        type: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        guest: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    });
    export default Reserve;
