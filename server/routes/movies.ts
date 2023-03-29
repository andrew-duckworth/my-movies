import express from 'express'
import { getAllMovies } from '../db/db'
const router = express.Router()

router.get('/', (req, res) => {
  getAllMovies()
    .then((movies) => {
      res.json(movies)
    })
    .catch((err: Error) => {
      res.status(500).send(err.message)
    })
})

export default router
