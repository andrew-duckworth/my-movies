import express from 'express'
const router = express.Router()

import * as db from '../db/db'

router.get('/', (req, res) => {
  db.getAllMovies()
    .then((moviesArr) => {
      res.json(moviesArr)
    })
    .catch(err => {
      // console.log(err.message)
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.post('/', (req, res) => {
  const movie = req.body
  db.addMovie(movie)
    .then((movieArray) => {
      res.json(movieArray[0]) 
    })
    .catch(err => {
      // console.log(err.message)
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

export default router