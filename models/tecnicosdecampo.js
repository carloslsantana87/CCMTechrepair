const { DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    const Tecnicosdecampo = sequelize.define('tecnicosdecampo', {
        nome: {
            type : DataTypes.STRING,
            allowNull : false
        },
        rg: {
            type : DataTypes.STRING,
            allowNull : true
        },
        emissor: {
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
    });

    return Tecnicosdecampo;
};