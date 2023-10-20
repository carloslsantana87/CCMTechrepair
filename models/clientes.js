const { DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    const Clientes = sequelize.define('Clientes', {
        nome: {
            type : DataTypes.STRING,
            allowNull : false
        },
        tipo: {
            type : DataTypes.STRING,
            allowNull : false
        },
        cnpj: {
            type : DataTypes.BIGINT,
            allowNull : true
        },
        cpf: {
            type : DataTypes.BIGINT,
            allowNull : true
        },
        cep: {
            type : DataTypes.INTEGER,
            allowNull : true
        },
        endereco: {
            type: DataTypes.STRING,
            allowNull: false
        },
        numero: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        complemento: {
            type: DataTypes.STRING,
            allowNull: false
        },
        bairro: {
            type: DataTypes.STRING,
            allowNull: false
        },
        cidade: {
            type: DataTypes.STRING,
            allowNull: false
          },
        datadocadastro: {
            type : DataTypes.DATE,
            allowNull : false
        }, 
        email: {
            type : DataTypes.STRING,
            allowNull : false
        },                
    });

    return Clientes;
};