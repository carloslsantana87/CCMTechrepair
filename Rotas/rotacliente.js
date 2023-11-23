const express = require('express');
const { Model } = require('sequelize');
const rotear = express.Router();

rotear
    .get("/", (req,res) => {
      console.log("Busca!")
    });

module.exports = rotear; 


