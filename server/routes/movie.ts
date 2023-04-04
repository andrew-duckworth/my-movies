// import express from 'express'
import { getMovies, delMovie } from '../db/connection'
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

router.delete('/:id', (req, res) => {
  const { id } = req.params
  delMovie(id)
    .then((dataArr) => {
      console.log('returned route data', dataArr)
      res.json(dataArr)
    })
    .catch((err: Error) => {
      res.status(500).send(err.message)
    })
})

export default router
