'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('tecnicosdecampo', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      tipo: {
        type : Sequelize.STRING,
        allowNull : false
    },
    serie: {
        type : Sequelize.STRING,
        allowNull : true
    },
    codcliente: {
        type : Sequelize.BIGINT,
        allowNull : true
    },
    datadocadastrogarantia: {
        type : Sequelize.DATE,
        allowNull : false
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
