'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class contact extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      /* this is how sq knows to create "magic methods"
      these are functions that can automatically pull
      related data.
      dfor example: if i have a user object
      i can call 'await user.getcontacts()' to get an
      array of this users contacts */
      contact.belongsTo(models.username, {
        foreignKey: 'user_id'
      });
      contact.belongsTo(models.username, {
        foreignKey: 'contact_id'
      })
    }
  };
  //1. first tell sq that the int points
  // to a user's id field
  contact.init({
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'username'
        key: 'id'
      }
    }
    ,
    sender_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'contact',
  });
  return contact;
};