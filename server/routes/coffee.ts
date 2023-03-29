import express from 'express'
import { getCoffeeData } from '../db/db'

const router = express.Router()

router.get('/', (req, res) => {
  getCoffeeData()
    .then((coffee) => {
      res.json(coffee)
    })
    .catch((err) => {
      res.status(500).send(err.message)
    })
})

export default router
