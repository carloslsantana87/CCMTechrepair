const { DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    const Chamados = sequelize.define('Chamados', {
        codcliente: {
            type : DataTypes.INTEGER,
            allowNull : false
        },
        nomecontchamado: {
            type : DataTypes.STRING,
            allowNull : false
        },
        fonecontchamado: {
            type : DataTypes.STRING,
            allowNull : false
        },
        serie: {
            type : DataTypes.STRING,
            allowNull : true
        },
        statuschamado: {
            type : DataTypes.STRING,
            allowNull : true
        },
        tipochamado: {
            type : DataTypes.STRING,
            allowNull : true
        },
        nivelacompanhamento: {
            type : DataTypes.INTEGER,
            allowNull : true
        },
        nivelacesso: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        descricao: {
            type: DataTypes.STRING,
            allowNull: false
        },
        datadocadastro: {
            type : DataTypes.DATE,
            allowNull : false
        }, 
                       
    });

    return Chamados;
};