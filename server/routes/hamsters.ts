import { Router } from 'express'
import request from 'superagent'

const router = Router()

import { getAllHamsters, updHamsters } from '../db/connection'

router.get('/', (req, res) => {
  getAllHamsters()
    .then((hamsters) => {
      res.json(hamsters)
    })
    .catch((err) => {
      res.status(500).send(err.message)
    })
})

router.patch('/:name', (req, res) => {
  updHamsters(req.params.name, req.body)
    .then(() => {
      res.sendStatus(200)
    })
    .catch((err: Error) => {
      res.status(500).send(err.message)
    })
})

export default router
