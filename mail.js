const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');
require('dotenv').config();

const auth = {
	auth: {
		api_key: process.env.API_KEY,
		domain: process.env.DOMAIN
	}
};

const transporter = nodemailer.createTransport(mailGun(auth));

exports.sendMail = async (subject, text) => {
	try {
		const mailOptions = {
			from: process.env.MAIL_FROM,
			to: process.env.MAIL_TO,
			subject: subject,
			text: text
		};
		await transporter.sendMail(mailOptions);
		console.log('Mail was sent!!!');
	} catch (error) {
		console.log('Something went wrong!!!');
		console.log(error);
	}
};
