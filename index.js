'use strict';

/* global require, process */

const express = require('express');
const db = require('./models');
const parse_decks = require('./utils/parse_decks.js');

const PORT = process.env.PORT || 3000;
const DEV = (!process.env.NODE_ENV) || (process.env.NODE_ENV == 'development');

const app = express();

app.get('/', function (req, res) {
	res.send('Hello World!');
});

db.sequelize.sync({force: !DEV})
	.then(parse_decks)
	.then(function () {
		app.listen(PORT, function() {
			console.log(`Listening on port ${PORT}`);
		});
	});
