const mongoose = require('mongoose')

const Schema = mongoose.Schema

const OnerepmaxSchema = new Schema({
  username: {
    type: Schema.Types.Mixed,
    required: true
  },
  lift: {
    type: String,
    required: true
  },
  weight: {
    type: Number,
    required: true
  },
  reps: {
    type: Number,
    required: true
  },
  max: {
    type: Number,
    required: true
  },

  maxBench: {
    type: Number,
  }

}, { timestamps: true })

module.exports = mongoose.model('Onerepmax', OnerepmaxSchema)

