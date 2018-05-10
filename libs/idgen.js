'use strict';

/* global module */

module.exports = function (length = 5) {
    let id = '';
    const alphanumerics = '0123456789';
    let max = alphanumerics.length;
    for (let i = 0; i < length; i++) {
        id += alphanumerics[Math.floor(Math.random() * max)];
    }

    return parseInt(id);
};