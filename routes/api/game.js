'use strict';

/* global require, module */

const db = require('../../models');
const router = require('express').Router();

router.post('/games', function (req, res) {
    let game = db.Game.build({
        name: req.body.name
    });

    game.save().then(() => res.json(game));
});

module.exports = router;