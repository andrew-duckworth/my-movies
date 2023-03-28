import express from 'express'
import { getAllJokes, getJokeById } from '../db/jokes-db/jokes-db'

export const router = express.Router()

router.get('/jokes', (req, res) => {
  getAllJokes()
    .then((jokes) => {
      res.json(jokes)
    })
    .catch((err: Error) => console.log(err.message))
})

// get joke from db
router.get('/joke/:id', (req, res) => {
  const id = Number(req.params.id)

  getJokeById(id)
    .then((joke) => {
      res.json(joke)
    })
    .catch((err: Error) => console.log(err.message))
})
