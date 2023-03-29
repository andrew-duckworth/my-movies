import express from 'express'
import { addDeck, delDeck, getAllDecks, getDeckById, updDeck } from '../db'

const router = express.Router()

router.get('/', (req, res) => {
  getAllDecks()
    .then((decks) => res.json(decks))
    .catch((err) => res.status(500).json({ status: 500, error: err.message }))
})

router.get('/:id', (req, res) => {
  getDeckById(Number(req.params.id))
    .then((deck) => res.json(deck))
    .catch((err) => res.status(500).json({ status: 500, error: err.message }))
})

router.post('/', (req, res) => {
  addDeck(req.body)
    .then((deck) => res.json(deck))
    .catch((err) => res.status(500).json({ status: 500, error: err.message }))
})

router.patch('/:id', (req, res) => {
  updDeck(req.body)
    .then((deck) => res.json(deck))
    .catch((err) => res.status(500).json({ status: 500, error: err.message }))
})

router.delete('/:id', (req, res) => {
  delDeck(Number(req.params.id))
    .then(() => res.sendStatus(200))
    .catch((err) => res.status(500).json({ status: 500, error: err.message }))
})

export default router
