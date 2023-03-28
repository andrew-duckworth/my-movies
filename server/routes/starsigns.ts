import express from 'express'
import { getStarsigns } from '../db/db'

const router = express.Router()

router.get('/', (req, res) => {
  getStarsigns()
    .then((signs) => {
      res.json(signs)
    })
    .catch((err) => {
      res.status(500).send(err.message)
    })
})

export default router
