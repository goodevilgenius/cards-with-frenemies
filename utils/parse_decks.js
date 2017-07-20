'use strict';

/* global require, process, module */

const Promise = require('bluebird');
const db = require('../models');
const fs = require('fs');

let readdir = Promise.promisify(fs.readdir);
let readFile = Promise.promisify(fs.readFile);

module.exports = function() {
	let deckFolder = process.cwd() + '/data/decks';
	return readdir(deckFolder)
		.then(function(contents) {
			return Promise.all(
				contents.map(function (deck) {
					let pr1 = readFile(deckFolder + '/' + deck + '/deck.json')
						.then(function (data) {
							let deckData = JSON.parse(data);
							return db.Deck.create(deckData);
						});
					let pr2 = pr1.then(function (deckModel) {
						return readFile(deckFolder + '/' + deck + '/cards.json');
					});
					return Promise.all([pr1, pr2])
						.spread(function (deckModel, cardFile) {
							let cardData = JSON.parse(cardFile);
							return db.Card.bulkCreate(
								cardData.map(function (aCard) {
									aCard.deck_id = deckModel.id;
									return aCard;
								})
							);
						});
				})
			);
		});
};
