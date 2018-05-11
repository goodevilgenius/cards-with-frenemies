'use strict';

/* global require, module */

const db = require('../../models');
const router = require('express').Router();

router.post('/games', function (req, res) {
    let game = db.Game.build({
        name: req.body.name
    });

    game.save()
        .then(() => res.json(game))
        .catch(err => res.status(500).json({message: err.message}));
});

module.exports = router;
