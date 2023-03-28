import { Router } from 'express'
const router = Router()

import { getAllShows, addShow, deleteShow, updateShow } from '../db/db'

router.get('/', (req, res) => {
  getAllShows()
    .then((show) => {
      res.json(show)
    })
    .catch((err: Error) => res.status(500).send(err.message))
})

export default router
