'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AccessRight extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  AccessRight.init({
    userid: DataTypes.INTEGER,
    albumid: DataTypes.INTEGER,
    UserId: DataTypes.INTEGER,
    AlbumId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'AccessRight',
  });
  return AccessRight;
};