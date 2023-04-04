import express from 'express'

import { json } from 'express'

const router = express.Router()

import * as db from '../db/db'
// import { getAllMovies } from '../db/db'

router.get('/', (req, res) => {
  db.getAllMovies()
    .then((moviesArr) => res.json(moviesArr))
    .catch((err) => console.log(err.message))
})

router.post('/', (req, res) => {
  const movie = req.body
  db.addMovie(movie)
    .then((movieArr) => {
      return res.json(movieArr[0])
    })
    .catch((err) => console.log(err.message))
})

export default router
