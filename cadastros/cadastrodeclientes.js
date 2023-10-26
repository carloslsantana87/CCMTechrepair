const nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    porta: 587, 
    secure: true,
    auth:{
        user: "ccmtechrepairtechrepair@gmail.com",
        pass: "juox rrrt rtzo rlul"
    }
});

const {Sequelize, DataTypes} = require('sequelize');
const config = require('../config/config.js');
const email = require('../config/email.js')
const clienteModel = require('../models/clientes.js');
const sequelize = new Sequelize(config.development);
const clienteCad = clienteModel(sequelize, DataTypes);
async function run() {

var idcliente = id;
var nomeCli = "HERMES BIJUTERIA";
var tipoCli = "FISICA";
var cnpjCli = 99009898000922;
var cpfCli = 0;
var cepCli = 50770500;
var ruaCli = "Rua Francisco Porfirio";
var numeCLi = 175;
var complementoCli = "Apt 305";
var bairroCli = "Afogados";
var cidadeCli = "Recife";
var datadocadastroCli = 25-10-2023;
var emailCLi = "carloslsantana87@gmail.com";



    try {
        //Cadastro de Pedidos
        const cadcliente = await clienteCad.create({
            nome: nomeCli,
            tipo: tipoCli,
            cnpj: cnpjCli,
            cpf:  cpfCli,
            cep: cepCli,
            endereco: ruaCli,
            numero: numeCLi,
            complemento: complementoCli,
            bairro: bairroCli,
            cidade: cidadeCli,
            datadocadastro: datadocadastroCli,
            email: emailCLi
        });
        const cadastro = await clienteCad.findAll();
        transporter.sendMail({
            from: "CCM - Techrepair <ccmtechrepairtechrepair@gmail.com>",
            to: emailCLi,
            subject: "Teste",
            text: `Você fez o seu cadastro na TecRephair
                   Seus dados são: ${id} ${nomeCli}, no endereço ${ruaCli}`
        }).then(message => {
            console.log(message)
        }).catch(err => {
            console.log(err);
        });
        console.log('Cliente Cadastrado:', cadastro); //.map(p => p.toJSON()));

    } catch (error) {
        console.error('Erro: ', error.message);
        
    } finally {
        // Fechar conexão com banco de dados
        await clienteCad.sequelize.close();
    }

}
run();


