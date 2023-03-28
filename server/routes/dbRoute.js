const express = require('express')

// grabbing the DB functions folder
const db = require('../db/data/familyDb')

// having the ability to use a router through express
export const router = express.Router()

router.get('/', (req, res) => {
  db.getAllFamily()
    .then((family) => {
      console.log(family)
      res.json(family)
    })
    .catch((err) => console.log(err.message))
})

router.get('/:id', (req, res) => {
  const id = req.params.id
  db.getFamilyById(id)
    .then((family) => {
      console.log(family)

      res.json(family)
    })
    .catch((err) => console.log(err.message))
})

// console.log(family)
// const familyData = {
//   family: family,
// }
// res.json('home', familyData)
