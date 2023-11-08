const nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    porta: 587,
    secure: true,
    auth: {
        user: "ccmtechrepairtechrepair@gmail.com",
        pass: "juox rrrt rtzo rlul"
    }
});

const { Sequelize, DataTypes } = require('sequelize');
const config = require('../config/config.js');
const email = require('../config/email.js')
const clienteModel = require('../models/clientes.js');
const clientes = require('../models/clientes.js');
const sequelize = new Sequelize(config.development);
const clienteCad = clienteModel(sequelize, DataTypes);
async function run() {

    var nomeCli : string = "AMANDA CABELEREIRO";
    var tipoCli : string = "FISICA";
    var cnpjCli : number = 99009898000922;
    var cpfCli : number = 0;
    var cepCli : number = 50770500;
    var ruaCli : string = "Rua Francisco Porfirio";
    var numeCLi: number = 175;
    var complementoCli : string = "Apt 305";
    var bairroCli: string = "Afogados";
    var cidadeCli : string = "Recife";
    var datadocadastroCli : Date = 25 - 10 - 2023;
    var emailCLi : string = "carloslsantana87@gmail.com";


    try {
        //Cadastro de Pedidos
        const cadcliente = await clienteCad.create({
            nome: nomeCli,
            tipo: tipoCli,
            cnpj: cnpjCli,
            cpf: cpfCli,
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
                   Seus dados foram cadastrados: 
                   Numero do cliente: 
                   Nome do cliente: ${nomeCli}
                   Endereço: ${ruaCli} ${numeCLi} ${complementoCli} ${bairroCli} ${cidadeCli} ${cepCli}
                   cnpj: ${cnpjCli}
                   cpf: ${cpfCli}`
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
    
    /*(async () => {
        const listadeclientes = await clientes.findByPk(1);
    
    console.log(listadeclientes);
    });*/

}
run();