'use strict';
module.exports = function(sequelize, DataTypes) {
  const Card = sequelize.define('Card', {
    type: {
      type: DataTypes.ENUM('question', 'answer'),
      allowNull: false
    },
    text: {
      type: DataTypes.STRING,
      allowNull: false
    },
    num_answers: {
      type: DataTypes.INTEGER,
      allowNull: false,
      default: 0
    }
  }, {
    underscored: true,
  });

  Card.associate = function(models) {
    Card.belongsTo(models.Deck, {
      foreignKey: {
        allowNull: false
      },
      onDelete: 'CASCADE'
    });
  };

  return Card;
};