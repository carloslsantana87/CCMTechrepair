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
      nome: {
        type : Sequelize.STRING,
        allowNull : false
    },
    rg: {
        type : Sequelize.STRING,
        allowNull : true
    },
    emissor: {
        type : Sequelize.BIGINT,
        allowNull : true
    },
    cpf: {
        type : Sequelize.BIGINT,
        allowNull : true
    },
    cep: {
        type : Sequelize.INTEGER,
        allowNull : true
    },
    endereco: {
        type: Sequelize.STRING,
        allowNull: false
    },
    numero: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    complemento: {
        type: Sequelize.STRING,
        allowNull: false
    },
    bairro: {
        type: Sequelize.STRING,
        allowNull: false
    },
    cidade: {
        type: Sequelize.STRING,
        allowNull: false
      },
    datadocadastro: {
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
