const DataTypes = require("sequelize");
const db = require("../database/db");
const Receber = db.define('receber', {
  dia: {
    type: DataTypes.SMALLINT,
    allowNull: false
  },
  descricao: {
    type: DataTypes.DOUBLE,
    allowNull:false
  },
  particular: {
    type: DataTypes.BOOLEAN,
    allowNull:false
  },
  repete: {
    type: DataTypes.BOOLEAN,
    allowNull:false
  },
  pagador: {
    type: DataTypes.BIGINT,
    allowNull:true
  },
  recebido: {
    type: DataTypes.BOOLEAN,
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
    tableName: 'receber'
  });


module.exports = Receber;
