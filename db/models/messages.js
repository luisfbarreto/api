'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Messages extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Messages.init({
    nome: DataTypes.STRING,
    cpf: DataTypes.STRING,
    email: DataTypes.STRING,
    telefone: DataTypes.STRING,
    nascimento: DataTypes.STRING,
    senha: DataTypes.STRING,
    confirmarSenha: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Messages',
  });
  return Messages;
};