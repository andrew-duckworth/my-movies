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

router.patch('/:id', (req, res) => {
  updHamsters(Number(req.params.id), req.body)
    .then((returned) => {
      res.json(returned[0])
    })
    .catch((err: Error) => {
      res.status(500).send(err.message)
    })
})

export default router
