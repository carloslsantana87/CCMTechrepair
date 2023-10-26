// app.js


const {Sequelize, DataTypes} = require('sequelize');
const config = require('../config/config.js');
const email = require('../config/email.js')
const clienteModel = require('../models/clientes.js');
const sequelize = new Sequelize(config.development);
const clienteCad = clienteModel(sequelize, DataTypes);
async function run() {


    try {
        //Cadastro de Pedidos
        const cadcliente = await clienteCad.create({
            nome: "CARLOS LUIZ DE SANTANA",
            tipo: "JURIDICA",
            cnpj: 99009898000978,
            cpf:  0,
            cep: 50770500,
            endereco: "Rua Francisco Porfirio",
            numero: 175,
            complemento: "Apt 305",
            bairro: "Afogados",
            cidade: "Recife",
            datadocadastro: 25-10-2023,
            email: "carloslsantana87g@gmail.com"
        });
        const cadastro = await clienteCad.findAll();
        console.log('Cliente Cadastrado:', cadastro); //.map(p => p.toJSON()));

    } catch (error) {
        console.error('Erro: ', error.message);
        
    } finally {
        // Fechar conexão com banco de dados
        await clienteCad.sequelize.close();
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
