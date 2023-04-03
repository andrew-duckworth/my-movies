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
    .catch(err => console.log(err.message))
})

export default router