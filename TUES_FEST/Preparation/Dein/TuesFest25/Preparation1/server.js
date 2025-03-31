const express = require('express'); 
const nodemailer = require('nodemailer');
const crypto = require('crypto');
const session = require('express-session');
const path = require('path');

const app = express();
const PORT = 8001;

app.use(express.urlencoded({ extended: true }));
app.use(session({ secret: 'securekey', resave: false, saveUninitialized: true }));

const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
        user: 'deyan662@gmail.com',
        pass: 'sxwh bnvf djli ivtj'
    },
    tls: {
        rejectUnauthorized: false
    }
});



const verificationLinks = {};

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/send-email', (req, res) => {
    const { email, action } = req.body;
    let subject = 'Вашето заявено имейл съдържание';
    let htmlContent = '';
    
    if (action === 'text') {
        htmlContent = '<p>Здравейте от нашия сайт!</p>';
    } else if (action === 'link') {
        const token = crypto.randomBytes(20).toString('hex');
        verificationLinks[token] = email;
       htmlContent = `<p>Цъкнете <a href='http://localhost:8001/homepage/${token}'>тук</a> за достъп до сайта.</p>`;
    } else if (action === 'text-link-image') {
        const token = crypto.randomBytes(20).toString('hex');
        verificationLinks[token] = email;
        htmlContent = `<p>Добре дошли!</p>
                       <p>Щракнете <a href='http://localhost:8001/homepage/${token}'>тук</a> за достъп до сайта.</p>
                       <img src='https://www.fortworthtexas.gov/files/assets/public/v/1/hr/images/verification-banner.jpg?dimension=pageimagefullwidth&w=1140'>`;
    }
    
    const mailOptions = {
        from: 'deyan662@gmail.com',
        to: email,
        subject: 'Имейл за верификация',
        html: htmlContent
    };
    
    transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
            console.error('Грешка при изпращането на имейл:', err);
            res.status(500).send('Грешка при изпращането на имейл. Моля, проверете конзолата за подробности.');
        } else {
            console.log('Имейл изпратен успешно:', info.response);
            res.send('<h1>Имейлът беше изпратен успешно. Моля, проверете пощата си!</h1>');
        }
    });    
});

app.get('/homepage/:token', (req, res) => {
    const { token } = req.params;
    if (verificationLinks[token]) {
        req.session.verified = true;
        res.send('<h1>Добре дошли на главната страница!</h1>');
    } else {
        res.status(403).send('Достъпът е отказан! Моля, използвайте линка за верификация.');
    }
});

app.listen(PORT, () => {
    console.log(`Сървърът е стартиран на http://localhost:${PORT}`);
});
