const router = require('express').Router();
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({      
  service: 'gmail',
  auth: {
    type: 'oauth2',
    user: 'anthony.yershov@gmail.com',
    clientId: '491378559785-ugm54mvptes2ap7jtbna0bsk5kg43onj.apps.googleusercontent.com',
    clientSecret: 'KBWTE322YJ7-yCn5rk2a-0zm',
    refreshToken: '1//04pTv1ASMhDzDCgYIARAAGAQSNwF-L9Ir4Ck_7Gbn83kvsDnRsy_iZ6dR55pJJl7UCTE98ogjIL-pbiiI-7ZP_uS5NvHeXulHTwY'                         
  }
});

router.post('/', (req, res) => {
  transporter.sendMail({
    to: 'ayershov777@gmail.com',
    subject: `valeryyershov.com | ${req.body.subject}`,
    text: req.body.text + "\n" + req.body.email
  }, (err, info) => {
    if(err) {
      console.log(err);
      res.json(err);
    }
    else res.json({ msg: `email sent: ${info.response}` });
  });
});

module.exports = router;