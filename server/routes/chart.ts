import express from 'express'
import * as db from '../db/db'

const router = express.Router()

router.get('/details', (req, res) => {
  db.getChartJoin()
    .then((thing) => {
      res.json(thing)
    })
    .catch((err) => {
      res.status(500).send(err.message)
    })
})

export default router
