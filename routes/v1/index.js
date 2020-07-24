const express = require('express');
const path = require('path');

const router = express.Router();

router.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, '../../', 'views', 'index.html'));
});

router.post('/email', (req, res) => {
	console.log(req.body);
	res.json({ message: 'email sent!!!!' });
});

module.exports = router;
