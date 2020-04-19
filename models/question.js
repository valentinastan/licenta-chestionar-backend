'use strict';
module.exports = (sequelize, DataTypes) => {
  const Question = sequelize.define('Question', {
    text: DataTypes.STRING
  }, {});
  Question.associate = function(models) {
  };
  return Question;
};
