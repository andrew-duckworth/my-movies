import express from 'express'
import {
  getAllJokes,
  getJokeById,
  addJoke,
  deleteJoke,
} from '../db/jokes-db/jokes-db'

export const router = express.Router()

// GET /api/v1/database/jokes/all
router.get('/all', (req, res) => {
  getAllJokes()
    .then((jokes) => {
      res.json(jokes)
    })
    .catch((err: Error) => console.log(err.message))
})

// GET /api/v1/database/jokes/:id
router.get('/:id', (req, res) => {
  const id = Number(req.params.id)

  getJokeById(id)
    .then((joke) => {
      res.json(joke)
    })
    .catch((err: Error) => console.log(err.message))
})

// POST /api/v1/database/jokes/add
router.post('/add', (req, res) => {
  const { joke, punchline } = req.body
  const jokeToAdd = { joke, punchline }
  addJoke(jokeToAdd)
    .then((newJoke) => {
      res.json(newJoke[0])
    })
    .catch((err) => {
      console.log(err.message)
    })
})

// DELETE /api/v1/database/jokes/delete/:id
router.delete('/delete/:id', (req, res) => {
  const id = Number(req.params.id)
  deleteJoke(id)
    .then((deletedJoke) => res.json(deletedJoke))
    .catch((err) => console.log(err.message))
})
