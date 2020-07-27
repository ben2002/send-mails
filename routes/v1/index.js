const express = require('express');
const path = require('path');
const { sendMail } = require('../../mail');

const router = express.Router();

router.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, '../../', 'views', 'index.html'));
});

router.post('/email', (req, res) => {
	console.log(req.body);
	sendMail(req.body.subject, req.body.text);
	res.json({ message: 'An email was sent!' });
});

module.exports = router;
