'use strict';

/* global module */

module.exports = function(sequelize, DataTypes) {
  const Deck = sequelize.define('Deck', {
	name: {
	  type: DataTypes.STRING,
	  unique: true,
	  allowNull: false
	},
	family: {
	  type: DataTypes.BOOLEAN,
	  default: false
	}
  }, {
    underscored: true,
  });

  Deck.associate = function(models) {
    Deck.hasMany(models.Card);
  };

  return Deck;
};
