'use strict';
module.exports = {
  //up tells it how to set up the table
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Usernames', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      usersname: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true

      },
      name: {
        type: Sequelize.STRING
      },
      hash: {
        type: Sequelize.STRING
      },
      account_number: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  //down tells howe to tear down the table
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Usernames');
  }
};