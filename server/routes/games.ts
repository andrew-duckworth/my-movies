import express from 'express'
import { addAGame, deleteAGame, getAllGames } from '../db/db'

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

// del

router.delete('/:id', (req, res) => {
  deleteAGame(Number(req.params.id))
    .then(() => {
      res.sendStatus(200)
    })
    .catch((err) => {
      res.status(500).send(err.message)
    })
})

//add

router.post('/', (req, res) => {
  addAGame(req.body)
    .then((game) => {
      res.json(game)
    })
    .catch((err) => {
      res.status(500).send(err.message)
    })
})
//end

export default router
