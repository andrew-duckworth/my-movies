import express from 'express'
import { getAllDecks } from '../db'

const router = express.Router()

router.get('/', (req, res) => {
  getAllDecks()
    .then((decks) => res.json(decks))
    .catch((err) => res.status(500).json({ status: 500, error: err.message }))
})

export default router
