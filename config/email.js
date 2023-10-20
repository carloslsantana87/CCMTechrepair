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

/*transporter.sendMail({
    from: "CCM - Techrepair <ccmtechrepairtechrepair@gmail.com>",
    to: "marvysonprog@gmail.com",
    subject: "Teste",
    text: "Você agora é cliente da Techrepair - Seja BEM-VINDO!!!"
}).then(message => {
    console.log(message)
}).catch(err => {
    console.log(err);
});*/