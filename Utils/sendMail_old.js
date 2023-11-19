import nodemailer from "nodemailer";
import { google } from "googleapis";
import dotenv from "dotenv";
dotenv.config();

const OAuth2 = google.auth.OAuth2;

export const sendActivationEmail = (email, activationLink) => {
        const oauth2Client = new OAuth2(process.env.CLIENT_ID,process.env.CLIENT_SECRET,"https://developers.google.com/oauthplayground");            
        oauth2Client.setCredentials({refresh_token: process.env.REFRESH_TOKEN});
        const transporter = nodemailer.createTransport({
                      service: "gmail",
                      auth: {
                        type: "OAuth2",
                        user: process.env.EMAIL,
                        accessToken:process.env.ACCESS_TOKEN,
                        clientId: process.env.CLIENT_ID,
                        clientSecret: process.env.CLIENT_SECRET,
                        refreshToken: process.env.REFRESH_TOKEN
                      }
              });
              const mailOptions = {
                from:process.env.EMAIL,
                to: email,
                subject: "Activate Your Account",
                html: `Click the following link to activate your account: <br/><a href="${activationLink}">${activationLink}</a>`,
              };
              transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                  console.error("Error sending activation email:", error);
                } else {
                  console.log("Activation email sent:", info.response);
                }
              });
}