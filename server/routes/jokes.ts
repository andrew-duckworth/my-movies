import express from 'express'
import { getAllJokes, getJokeById, addJoke } from '../db/jokes-db/jokes-db'

export const router = express.Router()

// GET /api/v1/database/jokes
router.get('/jokes', (req, res) => {
  getAllJokes()
    .then((jokes) => {
      res.json(jokes)
    })
    .catch((err: Error) => console.log(err.message))
})

// GET /api/v1/database/joke/:id
router.get('/joke/:id', (req, res) => {
  const id = Number(req.params.id)

  getJokeById(id)
    .then((joke) => {
      res.json(joke)
    })
    .catch((err: Error) => console.log(err.message))
})

// GET /api/v1/database/joke/add
router.post('/joke/add', (req, res) => {
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

router.delete('/joke/delete/:id', (req, res) => {
  const id = Number(req.params.id)
  deleteJoke()
})
