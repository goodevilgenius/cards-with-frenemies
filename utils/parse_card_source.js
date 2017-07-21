'use strict';

/* global require, process */

const fs = require('fs');
const Promise = require('bluebird');

const source = process.argv[2];
const data = require(process.cwd() + '/' + source);
const cards = {};

let stat = Promise.promisify(fs.stat);
let mkdir = Promise.promisify(fs.mkdir);
let writeFile = Promise.promisify(fs.writeFile);

data.forEach(function (card) {
	const {
		cardType: set,
		text: text,
		numAnswers: num_answers,
		expansion: deck
	} = card;

	if (!cards[deck]) {
		cards[deck] = [];
	}

	const type = set == 'Q' ? 'question' : 'answer';
	cards[deck].push({type, text, num_answers});
});

for (let deck in cards) {
	const directory = process.cwd() + '/data/decks/' + deck;
	const current = cards[deck];

	stat(directory).catch(function (e) {
		return mkdir(directory);
	}).then(function () {
		return writeFile(directory + '/cards.json', JSON.stringify(current, null, 2));
	});
}
