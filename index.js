'use strict';

const express = require('express');
const db = require('./models');

const PORT = process.env.PORT || 3000;
const DEV = (!process.env.NODE_ENV) || (process.env.NODE_ENV == 'development');

const app = express();

app.get('/', function (req, res) {
	res.send('Hello World!');
});

db.sequelize.sync({force: !DEV}).then(function() {
  app.listen(PORT, function() {
    console.log(`Listening on port ${PORT}`);
  });
});
