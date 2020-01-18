'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Answers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idSet: {
        type: Sequelize.STRING
      },
      idQuestion: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Questions', // name of Target model
          key: 'id', // key in Target model that we're referencing
        },
        onDelete: 'CASCADE',
      },
      value: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('NOW()')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('NOW()')
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Answers');
  }
};