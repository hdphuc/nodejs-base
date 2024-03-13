'use strict';
const {
  Model, DataTypes
} = require('sequelize');
const sequelizeMysql = require('../database/sequelize_mysql');
class Post extends Model {
  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
  static associate(models) {
    // define association here
  }
}

Post.init({
  title: DataTypes.STRING,
  author: DataTypes.STRING,
  published_date: DataTypes.DATE
}, {
  sequelize: sequelizeMysql,
  modelName: 'Post',
});

module.exports = Post