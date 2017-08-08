'use strict';

/* global require, module */

const db = require('../../models');
const router = require('express').Router();

router.get('/decks', function (req, res) {
	db.Deck.findAll()
		.then(function (decks) {
			res.json(decks);
		});
});

router.get('/decks/:ids', function (req, res) {
	let ids = req.params.ids.split(',');
	db.Deck.findAll({
		where: {
			id: {
				'$in': ids
			}
		}
	}).then(function (decks) {
		res.json(decks);
	});
});

router.get('/decks/:ids/cards', function (req, res) {
	let ids = req.params.ids.split(',');
	db.Card.findAll({
		where: {
			deck_id: {
				'$in': ids
			}
		}
	}).then(function (cards) {
		res.json(cards);
	});
	
});

router.get('/deck/:id', function (req, res) {
	db.Deck.find({
		where:{
			id: req.params.id
		}
	}).then(function (deck) {
		res.json(deck);
	});
});

router.get('/deck/:id/cards', function (req, res) {
	db.Card.findAll({
		where: {
			deck_id: req.params.id
		}
	}).then(function (cards) {
		res.json(cards);
	});
});

router.get('/cards', function (req, res) {
	db.Card.findAll({
		include: [{model: db.Deck}]
	}).then(function (cards) {
		res.json(cards);
	});
});

router.get('/cards/:ids', function (req, res) {
	let ids = req.params.ids.split(',');
	db.Card.findAll({
		where: {
			id: {
				'$in': ids
			}
		},
		include: [{model: db.Deck}]
	}).then(function (cards) {
		res.json(cards);
	});
});

router.get('/card/:id', function (req, res) {
	db.Card.find({
		where:{
			id: req.params.id
		},
		include: [{model: db.Deck}]
	}).then(function (card) {
		res.json(card);
	});
});

module.exports = router;
