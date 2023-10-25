'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('chamados', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
    },
      codcliente: {
        type : Sequelize.INTEGER,
        allowNull : false
    },
    nomecontchamado: {
        type : Sequelize.STRING,
        allowNull : true
    },
    fonecontchamado: {
      type : Sequelize.STRING,
      allowNull : true
    },
    serie: {
        type : Sequelize.STRING,
        allowNull : true
    },
    statusdochamado: {
        type : Sequelize.STRING,
        allowNull : false
    },  
    tipodochamado: {
      type : Sequelize.STRING,
      allowNull : false
    },    
      nivelacompanhamento: {
      type : Sequelize.INTEGER,
      allowNull : false
    }, 
    nivelacesso: {
      type : Sequelize.INTEGER,
      allowNull : false
    },   
    descricao: {
      type : Sequelize.STRING,
      allowNull : false
    },   
    datadocadastro: {
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
