import { createTransport } from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

console.log("Email:", process.env.Gmail);
console.log("Password:", process.env.Password ? "Loaded" : "Not Loaded");

const sendMail = async (email, subject, data) => {
  const transport = createTransport({
    service: "gmail",
    auth: {
      user: "deepakviji556@gmail.com",
      pass: "sogdvnxobzeazfzr" ,
    },
  });

  const html = `<p>Hello ${data.name}, your OTP is: <b>${data.otp}</b></p>`;

  await transport.sendMail({
    from: `"Cognito" <${process.env.Gmail}>`,
    to: email,
    subject,
    html,
  });
  console.log("📧 Email Sent Successfully!");
};

export default sendMail;
