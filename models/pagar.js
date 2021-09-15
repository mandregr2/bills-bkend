const DataTypes = require("sequelize");
const db = require("../database/db");
const Pagar = db.define('pagar', {
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
  pago: {
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
    tableName: 'pagar'
  });


module.exports = Pagar;
