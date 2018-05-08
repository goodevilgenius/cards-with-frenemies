'use strict';

/* global module */

module.exports = function(sequelize, DataTypes) {
  const User = sequelize.define('User', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    underscored: true,
  });

  User.associate = function(models) {
    User.belongsTo(models.Game, {
      foreignKey: {
        allowNull: false
      },
      onDelete: 'CASCADE'
    });
  };

  return User;
};
