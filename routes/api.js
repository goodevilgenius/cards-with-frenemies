'use strict';

/* global require, module */

const router = require('express').Router();

router.use(require('./api/cards'));

// @todo gameplay routes
// with authentications

module.exports = router;
