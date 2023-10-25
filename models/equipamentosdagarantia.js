const { DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    const Equipamentos = sequelize.define('Equipamentos', {
        tipo: {
            type : DataTypes.STRING,
            allowNull : false
        },
        serie: {
            type : DataTypes.STRING,
            allowNull : false
        },
        codcliente: {
            type : DataTypes.BIGINT,
            allowNull : true
        },
        datadocadastrogarantia: {
            type : DataTypes.DATE,
            allowNull : false
        }, 
                     
    });

    return Equipamentos;

};