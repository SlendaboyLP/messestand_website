import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import bodyParser from "body-parser";

const EMAIL = "";
const PASSWORD = "";

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post("/send-email", (req, res) => {
  const { name, email, message } = req.body;

  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: EMAIL,
      pass: PASSWORD,
    },
  });

  let mailOptions = {
    from: EMAIL,
    to: EMAIL,
    subject: "Messestand Anfrage",
    text: `
      Name: ${name}\n
      Email: ${email}\n
      Nachricht: ${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      res.status(500).send(error);
    } else {
      res.status(200).send("Email sent: " + info.response);
    }
  });
});

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
