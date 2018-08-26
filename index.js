const express = require('express');
const app =express();
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(express.static('public'));
app.post('/sample',(req,res)=>{
    const {name,email,title,message}= req.body;
var transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: 'sivaprathap.konduru@gmail.com',
        pass: 'siva4568'
    }
});

var mailOptions = {
    from: `${email}`,
    to: 'sivaprathap.konduru@gmail.com',
    subject: `${title}`,
    text: `${email},${name}  and ${message}`,
    html: `<p><b>email:- </b>${email} ,<b>name:- </b>${name} , <b>title:- </b>${title} ,<b>message:- </b> ${message}</p>`
};

transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
        console.log(error);
    } else {
        console.log('Message sent: ' + info.response);
    }
    transporter.close();
});
})
app.listen(200,()=>{console.log('hsh')})