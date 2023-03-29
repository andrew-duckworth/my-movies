import express from 'express'
import { Route } from 'react-router-dom'
import { getStarsigns, getUsers } from '../db/db'

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

router.get('/chart', (req, res) => {
  getUsers()
    .then((users) => {
      res.json(users)
    })
    .catch((err) => {
      res.status(500).send(err.message)
    })
})

export default router
