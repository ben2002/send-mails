# Mail API

When a form is submitted, the form mail script collects the data submitted in the form, composes an email and sends the email from and to the address it is configured.

- Node.js
- Express
- Nodemailer
- MailGun

# Set environment variables:

create a .env file with

- API_KEY='Your API-KEY from MailGun'
- DOMAIN='Your Domain'
- MAIL_FROM=''
- MAIL_TO=''

# Running in Development

npm run server
