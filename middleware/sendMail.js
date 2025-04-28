import { createTransport } from "nodemailer";
import dotenv from "dotenv";
dotenv.config();
console.log("Email:", process.env.Gmail);
console.log("Password:", process.env.Password ? "Loaded" : "Not Loaded");

const sendMail = async (email, subject, data) => {
  const transport = createTransport({
    service: "gmail",
    auth: {
      user: process.env.Gmail,
      pass: process.env.Password,
    },
  });
  const html = ` <div
      style="
        font-family: Arial, sans-serif;
        margin: 0;
        padding: 0;
        text-align: center;
      "
    >
      <div
        style="
          background-color: #28a745;
          color: white;
          padding: 20px 0;
          display: flex;
          border-radius: 08px;
          justify-content: center;
          align-items: center;
          text-align: center; /* Added to center the text horizontally */
        "
      >
        <h1
          style="
            margin: 0;
            font-size: clamp(1.2rem, 5vw, 2rem);
            text-align: center;
            justify-content: center;
            
          "
        >
          COGNITO
        </h1>
      </div>
      <div
        style="
          margin: 20px auto;
          max-width: 600px;
          padding: 20px;
          border: 1px solid #ddd;
          border-radius: 8px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        "
      >
        <h2 style="font-size: clamp(1rem, 3vw, 1.5rem); color: #333">
          Welcome to Cognito – Your Smart Learning Platform!
        </h2>
        <p style="font-size: clamp(0.8rem, 2vw, 1rem); color: #555">
          To continue with your registration/login, please use the OTP (One-Time
          Password) below to verify your account:
        </p>
        <p
          style="
            font-size: clamp(1.2rem, 4vw, 2rem);
            font-weight: bold;
            color: #000;
          "
        >
          OTP : ${data.otp} 
        </p>
      </div>
    </div>`;
  try {
    await transport.sendMail({
      from: `Cognito`,
      to: email,
      subject: "Verify your registration using this OTP.",
      html,
    });
    console.log("📧 Email Sent Successfully!");
  } catch (error) {
    console.error("❌ Email Sending Failed:", error.message);
  }
};

export default sendMail;
