import express from "express";
import mongoose from "mongoose";
import "dotenv/config";
import path from "path";
import cors from "cors";
import nodemailer from "nodemailer";
import e from "express";
const router = express.Router();

const DB = process.env.DBURI.replace("<PASSWORD>", process.env.DBPASSWORD);

mongoose
  .connect(DB, {})
  .then((con) => {
    console.log("DB connection is successful");
  })
  .catch((err) => {
    console.log(err);
  });

const port = process.env.PORT || 8000;

const __dirname = path.resolve();

const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
console.log(process.env.EMAIL_USER);
console.log(process.env.EMAIL_PASS);

app.get("*", (req, res) => {
  res.send("Hello Api!");
});

const contactEmail = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});

router.post("/contact", (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const subject = req.body.subject;
  const phone = req.body.phone;
  const message = req.body.message;
  const mail = {
    from: name,
    to: process.env.EMAIL_USER,
    subject: "Contact From Submission - Amrit Organics",
    html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Subject: ${subject}</p>
           <p>Phone: ${phone}</p>
           <p>Message: ${message}</p>`,
  };
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json(error);
    } else {
      res.json({ code: 200, status: "Message Sent" });
    }
  });
});
