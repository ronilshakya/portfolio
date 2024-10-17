const express = require('express');
const nodemailer = require('nodemailer')
const cors = require('cors')
const bodyParser = require('body-parser')
const axios = require('axios')
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors())
app.use(bodyParser.json())

app.post('/send', async (req, res) => {
  const { name, email, message, recaptchaToken } = req.body;
  const recaptchaResponse = await axios.post(
    `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${recaptchaToken}`
  );

  if (!recaptchaResponse.data.success) {
    return res.status(400).send({ message: "reCAPTCHA validation failed" });
  }

  try {
      const transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
            user: process.env.EMAIL_ADDRESS,
            pass: process.env.EMAIL_PASSWORD,
          },
        });

      let mailOptions = {
        from: email,
        to: process.env.EMAIL_ADDRESS,
        subject: `New contact form submission from ${name}`,
        text: `You have received a new message from your contact form: \n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`,
      };

      let info = await transporter.sendMail(mailOptions);
      console.log("Email sent: " + info.response);
      res.status(200).send({ message: "Message sent successfully!" }); // Explicitly sending success response
  } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).send({ message: "Error sending message" }); // Sending proper error response
  }
});


app.listen(PORT, ()=>{
    console.log(`Server started on port ${PORT}`);
})