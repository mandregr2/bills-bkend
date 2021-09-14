'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      nome: 'Mario Andre',
      email: 'andre@admin.com',
      password: '123456',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
    },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
