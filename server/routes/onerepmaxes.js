const express = require('express')
const {
  getOnerepmaxes,
  getOnerepmax,
  createOnerepmax,
  deleteOnerepmax
} = require('../controllers/onerepmaxController') 

const Onerepmax = require('../models/onerepmaxModel')

// Express router
const router = express.Router()

router.get('/', getOnerepmaxes)

router.get('/:id', getOnerepmax)

router.post('/', createOnerepmax)

router.delete('/:id', deleteOnerepmax)
module.exports = router