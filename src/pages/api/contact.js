import fetch from "node-fetch";

const API_KEY = process.env.MAILGUN_KEY;
const DOMAIN = process.env.MAILGUN_DOMAIN;

const formData = require('form-data');
const Mailgun = require('mailgun.js');

const mailgun = new Mailgun(formData);
const client = mailgun.client({username: 'api', key: API_KEY, url: 'https://api.eu.mailgun.net'});


export default async function handler(req, res) {
  const {body, method} = req;

  // Extract the email and captcha code from the request body
  const {firstname, lastname, email, phone, subject, message, captcha} = body;

  if (method === "POST") {
    // If email or captcha are missing return an error
    if (!firstname || !lastname || !email || !phone || !subject || !message || !captcha) {
      return res.status(422).json({
        message: "Bitte füllen Sie alle erforderlichen Felder aus",
      });
    }

    try {
      // Ping the google recaptcha verify API to verify the captcha code you received
      const response = await fetch(
        `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${captcha}`,
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded; charset=utf-8",
          },
          method: "POST",
        }
      );
      const captchaValidation = await response.json();
      /**
       * The structure of response from the veirfy API is
       * {
       *  "success": true|false,
       *  "challenge_ts": timestamp,  // timestamp of the challenge load (ISO format yyyy-MM-dd'T'HH:mm:ssZZ)
       *  "hostname": string,         // the hostname of the site where the reCAPTCHA was solved
       *  "error-codes": [...]        // optional
        }
       */
      if (captchaValidation.success) {
        // Replace this with the API that will save the data received
        // to your backend
        const messageData = {
          from: 'Website <nextjs@splintnet.de>',
          to: 'info@splintnet.de',
          subject: 'Kontaktanfrage',
          text: `Vorname: ${firstname}\nNachname: ${lastname}\nE-Mail: ${email}\nTelefon: ${phone}\nBetreff: ${subject}\nNachricht: ${message}`
        };

        client.messages.create(DOMAIN, messageData)
          .then((res) => {
            console.log(res);
          })
          .catch((err) => {
            console.error(err);
          });


        // Return 200 if everything is successful
        return res.status(200).send("Nachricht gesendet");
      }

      return res.status(422).json({
        message: "Ungültiger Recaptcha Code",
      });
    } catch (error) {
      console.log(error);
      return res.status(422).json({message: "Something went wrong"});
    }
  }
  // Return 404 if someone pings the API with a method other than
  // POST
  return res.status(404).send("Not found");
}
