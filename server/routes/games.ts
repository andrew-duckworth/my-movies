import express from 'express'
import { getAllGames } from '../db/db'

const router = express.Router()

// routes go here

router.get('/', (req, res) => {
  getAllGames()
    .then((data) => {
      res.json(data)
    })
    .catch((err) => {
      res.status(500).send(err.message)
    })
})

//end

export default router
