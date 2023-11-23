const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const porta = 3000;
const routers = require("./Rotas/index.js");

app.use(bodyParser.json());

routers(app);

app.listen(porta, ()=> {
    console.log(`Servidor ${porta}`)
})
