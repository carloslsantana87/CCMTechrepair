// app.js


const { Sequelize, DataTypes } = require('sequelize');
const config = require('../config/config.js');
const email = require('../config/email.js')
const equipaModel = require('../models/equipamentosdagarantia.js');
const sequelize = new Sequelize(config.development);
const equipaCad = equipaModel(sequelize, DataTypes);
async function run() {
    try {
        //Cadastro de Pedidos
        const cadEquipa = await equipaCad.create({
            tipo: "SERVIDOR",
            serie: "4CBX76890988",
            modelo: "HP-45698-FULL PROTECT",
            codcliente: 1,
            datadocadastrogarantia: 25-10-2023,
        });
        const cadastroEquipa = await equipaCad.findAll();
        console.log('Cliente Cadastrado:', cadastroEquipa); //.map(p => p.toJSON()));

    } catch (error) {
        console.error('Erro: ', error.message);

    } finally {
        // Fechar conexão com banco de dados
        await equipaCad.sequelize.close();
    }

}
run();



/*transporter.sendMail({
    from: "CCM - Techrepair <ccmtechrepairtechrepair@gmail.com>",
    to: "carloslsantana87@gmail.com",
    subject: "Teste",
    text: "Você agora é cliente da Techrepair - Seja BEM-VINDO!!!"
}).then(message => {
    console.log(message)
}).catch(err => {
    console.log(err);
});*/
