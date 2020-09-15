const express = require('express');

const app = express();

let count = 0;
let messages = [];

app.get('/', (req, res) => {
	count++;

	if (req.query.message) {
		messages.push(req.query.message);
	}

	res.send({
		count: 'count: ' + count,
		messages: messages
	});
});

app.listen(8000,  () => { console.log("The server is up and running") });