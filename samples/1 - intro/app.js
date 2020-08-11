const path = require('path');
const express = require('express');

const app = express();

app.get('/', (req, res) => {
	
});

app.get('/about', (req, res) => {
	res.send("Vamos aprender como funciona o node js");
});

app.get('/users', (req, res) => {
	res.json(["Eduardo", "Felipe", "Steban", "Marco"])
});

app.post('/users', (req, res) => {
	console.log(req);
});

app.listen(8000,  () => { console.log("The server is up and running") });