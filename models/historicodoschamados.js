const { DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    const Historicochamados = sequelize.define('Historicochamados', {
        codchamado: {
            type : DataTypes.INTEGER,
            allowNull : false
        },
        statuschamado: {
            type : DataTypes.STRING,
            allowNull : false
        },
        descricao: {
            type : DataTypes.STRING,
            allowNull : false
        },
        
        datamovimentacao: {
            type : DataTypes.DATE,
            allowNull : false
        }, 
                       
    });

    return Historicochamados;
};