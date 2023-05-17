require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const onerepmaxRoutes = require('./routes/onerepmaxes')

const app = express()

app.use(express.json())

// middleware
app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

// connect to db
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log('listening on port', process.env.PORT)
    })
  })
  .catch((error) => {
    console.log(error)
  })

app.use('/api', onerepmaxRoutes)

