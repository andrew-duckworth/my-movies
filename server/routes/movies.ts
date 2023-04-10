import express from 'express'
const router = express.Router()

//import * as db from '../db/db'
import { getAllMoviesDB } from '../db/db'

router.get('/', (req, res) => {
  getAllMoviesDB()
    .then((moviesArr) => res.json(moviesArr))
    .catch((err) => {
      res.send(500).json({ message: err.message })
    })
})

// router.get('/:id', (req, res) =>) => {
//   db.getMovieDB()
// }

export default router
