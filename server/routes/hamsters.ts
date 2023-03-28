import { Router } from 'express'
import request from 'superagent'

const router = Router()

import { getAllHamsters } from '../db/connection'

router.get('/', (req, res) => {
  getAllHamsters()
    .then((hamsters) => {
      res.json(hamsters)
    })
    .catch((err) => {
      res.status(500).send(err.message)
    })
})

export default router
