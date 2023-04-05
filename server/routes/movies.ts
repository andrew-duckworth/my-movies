import express from 'express'
const router = express.Router()

import * as db from '../db/db'
// import { getAllMovies } from '../db/db'

router.get('/', (req, res) => {
  db.getAllMovies()
    .then((moviesArr) => {
      res.json(moviesArr)
    })
    // .catch(err => {
    //   res.sendStatus(500).json({ message: err.message})
    // })
    // .catch(err => {
    //   res.send(500).json({ message: err.message})
    // })
    .catch((err) => console.log(err.message))
})

router.post('/', (req, res) => {
  const movie = req.body
  db.addMovie(movie)
    .then((movieArray) => {
      console.log(movieArray)
      return res.json(movieArray[0])
    })
    .catch((err) => console.log(err.message))
})

router.delete('/:id', (req, res) => {
  db.delMovie(Number(req.params.id))
    .then(() => {
      res.sendStatus(200)
    })
    .catch((err) => console.log(err.message))
})

export default router
