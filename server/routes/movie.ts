// import express from 'express'
import { getMovies } from '../db/movieDb'
import { Router } from 'express'

const router = Router()

router.get('/', (req, res) => {
  getMovies()
    .then((movies) => {
      res.json(movies)
    })
    .catch((err) => {
      res.status(500).send(err.message)
    })
})

export default router
