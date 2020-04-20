const express = require('express');
const app = express();
const morgan = require('./config/morgan')
const answerRouter = require('./routes/answers')


app.use(express.json());
app.use(morgan)

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', '*');
  next();
})

app.use(answerRouter)


app.use((error, req, res, next) => {
  const {
    statusCode,
    message,
    errorArray
  } = error

  res.status(statusCode).json({ message: message, errors: errorArray })
})

port = process.env.PORT
if(process.env.NODE_ENV === "development"){
  port = 2020
}

app.listen(port)
