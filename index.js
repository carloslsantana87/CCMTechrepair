const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const porta = 3000;
const rotas = require("./rotas/index.js ");

app.use(bodyParser.jason());

rotas(app);

app.listen(porta, ()=> {
    console.log(`Servidor ${porta}`)
})
