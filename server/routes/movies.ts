import express from 'express'
import { getAllMovies, deleteMovie } from '../db/db'
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

router.delete('/delete/:id', (req, res) => {
  const id = Number(req.params.id)
  deleteMovie(id)
    .then((id) => res.json(id))
    .catch((err) => console.log(err.message))
})

export default router
