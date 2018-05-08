'use strict';

/* global module */

module.exports = function(sequelize, DataTypes) {
  const Game = sequelize.define('Game', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    underscored: true,
  });

  Game.associate = function(models) {
      Game.belongsToMany(models.Deck, {through: 'GameDecks'});
  };

  return Game;
};
