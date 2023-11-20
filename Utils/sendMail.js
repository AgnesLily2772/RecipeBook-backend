import sgMail from '@sendgrid/mail'
import dotenv from "dotenv"
dotenv.config()

const key = process.env.SENDGRID_API_KEY
console.log(key)
sgMail.setApiKey(key)
export const sendMail = () => {
        const msg = {
                to: 'agneslily2727@gmail.com', // Change to your recipient
                from: 'agneslily2772@gmail.com', // Change to your verified sender
                subject: 'Sending with SendGrid is Fun',
                text: 'and easy to do anywhere, even with Node.js',
                html: '<strong>and easy to do anywhere, even with Node.js</strong>',
              }
              sgMail.send(msg)
              .then(() => console.log('Email sent'))
              .catch((error) => console.error(error))
}