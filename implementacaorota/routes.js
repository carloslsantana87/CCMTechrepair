const express = require('express');
const app = express();

const porta = process.env.PORT;

app.get('/cruds', (req, res)=> {
    res.send('Iniciando!');
});

app.listen(porta || 3000, () => {console.log('Servidor Rodando')});