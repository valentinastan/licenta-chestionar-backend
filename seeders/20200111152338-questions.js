'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Questions', [
      {
        text: 'În general, cu ce frecvenţă consumaţi legume( proaspete )?'
      },
      {
        text: 'Cat de des achizitionati legume?'
      },
      {
        text: 'Ce procent din cantitatea totală de alimente consumate într-o lună este alocat consumului de legume (proaspete)?'
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Questions', null, {});
  }
};
