'use strict';
module.exports = (sequelize, DataTypes) => {
  const Answer = sequelize.define('Answer', {
    idSet: DataTypes.STRING,
    idQuestion: DataTypes.STRING,
    value: DataTypes.STRING
  }, {});
  Answer.associate = function(models) {
    Answer.belongsTo(models.Question);
  };
  return Answer;
};