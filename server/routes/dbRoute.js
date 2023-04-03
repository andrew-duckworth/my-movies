const express = require('express')

// grabbing the DB functions folder
// const db = require('../db/data/familyDb')
import { getAllFamilyDB, getFamilyByIdDB, delFamMemberDB, addFamMemberDB } from '../db/data/familyDb'

// having the ability to use a router through express
export const router = express.Router()

router.get('/', (req, res) => {
  getAllFamilyDB()
    .then((family) => {
      console.log(family)
      res.json(family)
    })
    .catch((err) => console.log(err.message))
})

router.get('/:id', (req, res) => {
  const id = req.params.id
  getFamilyByIdDB(id)
    .then((family) => {
      console.log(family)
      res.json(family)
    })
    .catch((err) => {
      console.log(err.message)
      res.status(500).send(err.message)
    })
})


//for adding new data to the database
router.post('/', (req, res) => {
  const data = {
    name: req.body.name,
    nicknames: req.body.nicknames,
    position: req.body.position,
    image: req.body.image,
  }

  addFamMemberDB(data)
  .then (([newData]) => {
    res.json(newData)
  })
  .catch((err) => {
    console.log(err.message)
    res.status(500).send(err.message)
  })
})

router.delete('/:id', (req, res) => {
  const id = req.params.id
  delFamMemberDB(id)
    .then(() => {
      res.sendStatus(200)
    })
    .catch((err) => {
      console.log(err.message)
      res.status(500).send(err.message)
    })
})
