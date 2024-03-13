'use strict';
const { Model, DataTypes, Sequelize } = require('sequelize');
const sequelizeMysql = require('../database/sequelize_mysql');
class User extends Model {
  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
  static associate(models) {
    // define association here
  }
}

User.init({
  firstName: DataTypes.STRING,
  lastName: DataTypes.STRING,
  email: DataTypes.STRING
}, {
  sequelize: sequelizeMysql,
  modelName: 'User',
  timestamps: true,
});

module.exports = User;