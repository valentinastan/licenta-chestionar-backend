'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Questions', [
      {
        text: 'In general, cu ce frecventa consumati legume proaspete?'
      },
      {
        text: 'Cat de des achizitionati legume?'
      },
      {
        text: 'Ce procent din cantitatea totala de alimente consumate intr-o luna este alocat consumului de legume proaspete?'
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Questions', null, {});
  }
};
