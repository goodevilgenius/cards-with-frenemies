'use strict';

/* global module */

const idGen = require('../libs/idgen');
var Promise = require('bluebird');

module.exports = function(sequelize, DataTypes) {
  const Game = sequelize.define('Game', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    underscored: true,
    hooks: {
      beforeCreate: function (game, options) {
        if (!game.id) {
          return (async function() {
            let id = false;
            while (!id) {
              let newId = idGen();
              let count = await Game.count({where:{id: newId}});
              if (count === 0) id = newId;
            }
            game.id = id;
          })();
        }
      }
    }
  });

  Game.associate = function(models) {
      Game.belongsToMany(models.Deck, {through: 'GameDecks'});
  };

  return Game;
};
