'use strict';

/* global require, process */

const express = require('express');
const db = require('./models');
const parse_decks = require('./utils/parse_decks.js');

const PORT = process.env.PORT || 3000;

const app = express();

app.get('/', function (req, res) {
	res.send('Hello World!');
});

app.get('/decks', function (req, res) {
	db.Deck.findAll()
		.then(function (decks) {
			res.json(decks);
		});
});

app.get('/decks-cards', function (req, res) {
	db.Deck.findAll({
		include: [{model: db.Card}]
	})
	.then(function (decks) {
		res.json(decks);
	});
});

app.get('/deck/:id', function (req, res) {
	db.Deck.find({
		where:{
			id: req.params.id
		}
	}).then(function (deck) {
		res.json(deck);
	});
});

app.get('/deck/:id/cards', function (req, res) {
	db.Card.findAll({
		where: {
			deck_id: req.params.id
		},
		include: [{model: db.Deck}]
	}).then(function (cards) {
		res.json(cards);
	});
});

db.sequelize.sync({force: true})
	.then(parse_decks)
	.then(function () {
		app.listen(PORT, function() {
			console.log(`Listening on port ${PORT}`);
		});
	});
