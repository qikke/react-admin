const express = require('express')
const bodyParser = require('body-parser')
const cooikeParser = require('cookie-parser')

const userRouter = require('./user')

const app = new express()

app.use(cooikeParser())
app.use(bodyParser.json())
app.use('/user', userRouter)

app.listen(9093, function () {
  console.log('Node app start at port 9093')
})

