// user.model.js

import { DataTypes } from 'sequelize';
import config from '../config/db.config.js'
// import config from '../config/database.js'

const Users = config.define('User', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default Users;
