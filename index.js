'use strict';

/* global require, process */

const express = require('express');
const db = require('./models');
const parse_decks = require('./utils/parse_decks.js');

const PORT = process.env.PORT || 3000;

const app = express();

app.use(require('body-parser').json());

app.get('/', function (req, res) {
	res.send('Hello World!');
});

app.use('/api', require('./routes/api'));

db.sequelize.sync({force: true})
	.then(parse_decks)
	.then(function () {
		app.listen(PORT, function() {
			console.log(`Listening on port ${PORT}`);
		});
	});
