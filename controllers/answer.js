const models = require('../models/index')
const Answers = models.Answer
const { uuid } = require('uuidv4');

exports.create = async (req, res, next) => {
  const data = req.body
  const idSet = uuid()

  const answers = data
    .map(question => question.variante.map(answer => {
      return {
        idSet,
        idQuestion: question.id,
        value: answer,
      }
    })).flat()

  const createdAnswers = await Answers.bulkCreate(answers)
  console.log(createdAnswers)
  res.status(200).json(createdAnswers)
}