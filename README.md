# Cards with Frenemies

This game is similar to [other](http://www.mattelgames.com/en-us/apples-to-apples/index.html) [card](https://cardsagainsthumanity.com) games.

This version can be played online with multiple friends. As long as you have a web browser (desktop or mobile), you can join in the fun (Android/iOS versions may come in the future).

Additionally, we support multiple game decks, which can be mixed and matched so you can play the game you want.

## Technology

This is a node.js app built using express, socket.io, Firebase (for authentication and database), and vue.js (for front-end).

You should be able to clone this repo, fill in the `.env` file (or add values to your environment), and deploy anywhere.

## Development goals

* Multiple decks. Initally, we'll only support the CC-licensed Cards Against Humanity Deck
* Mobile app
* House rules
* API so that other interfaces can be built on top (e.g. command-line version)
* Image-based decks (Memes Against Humanity?)
