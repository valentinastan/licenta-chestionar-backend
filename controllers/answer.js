const models = require('../models/index')
const Answers = models.Answer
const { uuid } = require('uuidv4');

exports.create = async (req, res, next) => {
  const data = req.body
  const idSet = uuid()

  Object.defineProperty(Array.prototype, 'flat', {
    value: function(depth = 1) {
      return this.reduce(function (flat, toFlatten) {
        return flat.concat((Array.isArray(toFlatten) && (depth>1)) ? toFlatten.flat(depth-1) : toFlatten);
      }, []);
    }
  });

  const answers = Object.keys(data).map(key => data[key])
  const bulkAnswers = answers.map(question => Object.keys(question.variante).map(key => question.variante[key])
    .map(variant => Object.keys(variant).map(key => variant[key]))
    .filter(el => el[1] === true)
    .map(answer => {
    return {
      idSet,
      idQuestion: question.id,
      value: answer[0]
    }
    })).flat(2)

  const createdAnswers = await Answers.bulkCreate(bulkAnswers)
  console.log(createdAnswers)
  res.status(200).json(createdAnswers)
}
