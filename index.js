const express = require('express')
const path = require('path')
  const nodemailer = require('nodemailer')
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 5000

const app= express()
app.use(express.static(path.join(__dirname, 'public')))
app.get('/', (req, res) => res.render('pages/index'))

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.post('/sample',(req,res)=>{
    const {name,email,title,message}= req.body
var transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: 'insearchlooks@gmail.com',
        pass: 'prathap4568'
    }
})

var mailOptions = {
    from: `${email}`,
    to: 'sivaprathap.konduru@gmail.com',
    subject: `${title}`,
    text: `${email},${name}  and ${message}`,
    html: `<p><b>email:- </b>${email} ,<b>name:- </b>${name} , <b>title:- </b>${title} ,<b>message:- </b> ${message}</p>`
}

transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
        console.log(error)
    } else {
        console.log('Message sent: ' + info.response)
    }
    transporter.close()
})
res.send('<h1><b>submited the details</b></h1><br><button onclick="goBack()">Go Back</button>')
})
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
