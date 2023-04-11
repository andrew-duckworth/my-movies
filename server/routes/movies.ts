import express from 'express'
const router = express.Router()

import * as db from '../db/db'

router.get('/', (req, res) => {
  db.getAllMoviesDB()
    .then((moviesArr) => res.json(moviesArr))
    .catch((err) => {
      res.send(500).json({ message: err.message })
    })
})

router.post('/', (req, res) => {
  const movie = req.body
  db.addMovieDB(movie)
    .then(([movieArr]) => {
      res.json(movieArr)
    })
    .catch((err) => {
      res.send(500).json({ message: err.message })
    })
})

// router.get('/:id', (req, res) =>) => {
//   db.getMovieDB()
// }

export default router
