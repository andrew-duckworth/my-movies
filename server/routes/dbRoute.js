const express = require('express')

// grabbing the DB functions folder
// const db = require('../db/data/familyDb')
import { getAllFamily, getFamilyById, delFamMember } from '../db/data/familyDb'

// having the ability to use a router through express
export const router = express.Router()

router.get('/', (req, res) => {
  getAllFamily()
    .then((family) => {
      console.log(family)
      res.json(family)
    })
    .catch((err) => console.log(err.message))
})

router.get('/:id', (req, res) => {
  const id = req.params.id
  getFamilyById(id)
    .then((family) => {
      console.log(family)
      res.json(family)
    })
    .catch((err) => {
      console.log(err.message)
      res.status(500).send(err.message)
    })
})

router.delete('/:id', (req, res) => {
  const id = req.params.id
  delFamMember(id)
    .then(() => {
      res.sendStatus(200)
    })
    .catch((err) => {
      console.log(err.message)
      res.status(500).send(err.message)
    })
})
