import express from 'express'
import * as db from '../db/db'

const router = express.Router()

router.get('/', (req, res) => {
  db.getUsers()
    .then((users) => {
      res.json(users)
    })
    .catch((err) => {
      res.status(500).send(err.message)
    })
})

router.post('/', (req, res) => {
  const user = req.body
  db.addUser(user)
    .then((userArr) => {
      return res.json(userArr[0])
    })
    .catch((err) => console.log(err.essage))
})

export default router
