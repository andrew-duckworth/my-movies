import express from 'express'
import { getAllHikes } from '../db/db'

const router = express.Router()

router.get('/', (req, res) => {
  getAllHikes()
    .then((hikes) => {
      res.json(hikes)
    })
    .catch((err) => {
      res.status(500).send(err.message)
    })
})

export default router
