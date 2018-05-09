'use strict';

/* global require, module */

const router = require('express').Router();

router.use(require('./api/cards'));
router.use(require('./api/game'));

module.exports = router;
