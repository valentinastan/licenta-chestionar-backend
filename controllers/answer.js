const models = require('../models/index')
const Answers = models.Answer
const { uuid } = require('uuidv4');

exports.create = async (req, res, next) => {
  console.log("IN CREATE ACTION")
  const data = req.body
  const idSet = uuid()

  Object.defineProperty(Array.prototype, 'flat', {
    value: function(depth = 1) {
      return this.reduce(function (flat, toFlatten) {
        return flat.concat((Array.isArray(toFlatten) && (depth>1)) ? toFlatten.flat(depth-1) : toFlatten);
      }, []);
    }
  });
  console.log("IN CREATE ACTION 2")

  const answers = Object.keys(data).map(key => data[key])
  let bulkAnswers = answers.map(question => Object.keys(question.variante)
    .map(key => question.variante[key])
    .filter(variant => variant.checked === true)
    .map(answer => {
      return {
        idSet,
        idQuestion: question.id,
        value: answer.val
      }
    })).flat(2)

    console.log("IN CREATE ACTION 34")
  const createdAnswers = await Answers.bulkCreate(bulkAnswers)
  console.log("IN CREATE ACTION 4")
  console.log(createdAnswers)
  res.status(200).json(createdAnswers)
}
