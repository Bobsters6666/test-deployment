const Onerepmax = require('../models/onerepmaxModel')
const mongoose = require('mongoose')

// get all onerempaxes
const getOnerepmaxes = async (req, res) => {
  // sort by created date
  const onerepmaxes = await Onerepmax.find({}).sort({createdAt: -1})

  res.status(200).json(onerepmaxes)
}

// get a single onerepmax
const getOnerepmax = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({error: "No such workout"})
  }

  const onerepmax = await Onerepmax.findById(id)

  if (!onerepmax) {
    return res.status(400).json({error: "No such workout"})
  }

  res.status(200).json(onerepmax)
}


// create a new onerepmax
const createOnerepmax = async (req, res) => {
  const {username, lift, weight, reps, max} = req.body

  // add doc to db
  try {
    const onerepmax = await Onerepmax.create({username, lift, weight, reps, max})
    res.status(200).json(onerepmax)
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

const deleteOnerepmax = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: "No such workout"})
  }

  const onerepmax = await Onerepmax.findByIdAndDelete(id)

  res.status(200).json(onerepmax)
}


// delete a onerepmax


// exporting functions
module.exports = {
  getOnerepmaxes,
  getOnerepmax,
  createOnerepmax,
  deleteOnerepmax
}