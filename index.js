import { Router } from "./Rotas/index.js";

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const porta = 3000;
const routers = require("./Rotas/index.js");

app.use(bodyParser.jason());

routers(app);

app.listen(porta, ()=> {
    console.log(`Servidor ${porta}`)
})
