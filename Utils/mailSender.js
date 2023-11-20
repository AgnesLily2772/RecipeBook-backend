import nodemailer from "nodemailer"
import dotenv from "dotenv"
dotenv.config()

const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.NODEMAILER_USER,
          pass:process.env.NODEMAILER_PASS,
        }
});

export const sendActivationEmail = (email, activationLink) => {
              const mailOptions = {
                from:process.env.EMAIL,
                to: email,
                subject: "RecipeBook - Activate Your Account",
                html: `Click the following link to activate your account: <br/><a href="${activationLink}">${activationLink}</a>`,
              };
              transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                  console.error("Error sending activation email:", error);
                } else {
                  console.log("Activation email sent successfully",);
                }
              });
}