'use strict';

/* global module */

function idGen() {
  return Math.floor(Math.random() * 99000) + 1000;
}

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
