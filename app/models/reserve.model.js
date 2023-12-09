import { DataTypes } from 'sequelize';
import { sequelize } from '../config/db.config.js';

const Reserve = sequelize.define('reservations',{
        
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        checkin: {
            type: DataTypes.DATEONLY,
            allowNull: false,
        },
        checkout: {
            type: DataTypes.DATEONLY,
            allowNull: false,
        }, 
        guest: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    });
    export default Reserve;
