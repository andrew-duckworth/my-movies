import express from 'express'
const router = express.Router()

import * as db from '../db/db'

router.get('/', (req, res) => {
  db.getAllIngredients()
    .then((ingredientArr) => {
      res.json(ingredientArr)
    })
    .catch((err) => console.log(err.message))
})

router.post('/', (req, res) => {
  const ingredient = req.body
  db.addRecipe(ingredient)
    .then(([ingredientArr]) => {
      res.json(ingredientArr)
    })
    .catch((err) => console.log(err.message))
})

// methods for the complicated stuff

// JSON.stringify(req.body.list)

// const data = JSON.parse(ingredients)

export default router
