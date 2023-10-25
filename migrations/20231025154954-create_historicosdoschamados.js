'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Historicochamados', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
    },
      codchamado: {
        type : Sequelize.INTEGER,
        allowNull : false
    },
    statuschamado: {
        type : Sequelize.STRING,
        allowNull : true
    },
    descricao: {
      type : Sequelize.STRING,
      allowNull : true
    },
    datamovimentacao: {
      type: Sequelize.DATE,
      allowNull: false
    },        
    createdAt: {
        allowNull: false,
        type: Sequelize.DATE
    },
    updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    }) 
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
