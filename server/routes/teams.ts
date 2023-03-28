import express from 'express'
import { getTeams } from '../db/db'

const router = express.Router()

router.get('/', (req, res) => {
  getTeams()
    .then((teams) => {
      res.json(teams)
    })
    .catch((err) => {
      res.status(500).send(err.message)
    })
})

export default router
