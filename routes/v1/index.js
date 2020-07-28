const express = require('express');
const path = require('path');

const { sendMail } = require('../../mail');
const rootDir = require('../../util/path');

const router = express.Router();

router.get('/', (req, res) => {
	res.sendFile(path.join(rootDir, 'views', 'index.html'));
});

router.post('/email', (req, res) => {
	console.log(req.body);
	sendMail(req.body.subject, req.body.text);
	res.json({ message: 'You successfully sent a mail' });
});

module.exports = router;
