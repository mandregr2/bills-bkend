const DataTypes = require("sequelize");
const db = require("../database/db");
const User = db.define('user', {
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull:false
  },
  password: {
    type: DataTypes.STRING,
    allowNull:false
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull:true
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull:true
  },
  
},
  {
    tableName: 'users'
  });


module.exports = User;
