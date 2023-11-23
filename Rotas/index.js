const express = require('express');
const clientes = express("./rotacliente.js");

const routers = (app) => {
    app.rotas('/').get((req, res)=>{
        res.status(200).send({titulo: "curso estudo"})
    })

    app.use(express.json(),
    clientes
    )
}
module.exports = routers;
