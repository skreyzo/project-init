'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Album extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {

      this.hasMany(models.Photo, { foreignKey: 'albumid' });
      this.belongsTo(models.User, { foreignKey: 'userid' });
      this.belongsToMany(models.User, {through: models.AccessRight});

      // define association here
    }
  }
  Album.init({
    userid: DataTypes.INTEGER,
    title: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Album',
  });
  return Album;
};