import express from 'express'
const router = express.Router()

import * as db from '../db/db'

router.get('/', (req, res) => {
  db.getAllRecipes()
    .then((recipesArr) => {
      res.json(recipesArr)
    })
    .catch((err) => console.log(err.message))
})

router.post('/', (req, res) => {
  const recipe = req.body
  db.addRecipe(recipe)
    .then(([recipeArr]) => {
      res.json(recipeArr)
    })
    .catch((err) => console.log(err.message))
})

// methods for the complicated stuff

// JSON.stringify(req.body.list)

// const data = JSON.parse(ingredients)

export default router
