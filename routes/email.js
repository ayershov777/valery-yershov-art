const router = require('express').Router();
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({      
  service: 'gmail',
  auth: {
    type: 'oauth2',
    user: process.env.EMAIL_ADDRESS_FROM,
    clientId: process.env.GMAIL_ID,
    clientSecret: process.env.GMAIL_SECRET,
    refreshToken: process.env.GMAIL_REFRESH                         
  }
});

router.post('/', (req, res) => {
  transporter.sendMail({
    to: process.env.EMAIL_ADDRESS_TO,
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