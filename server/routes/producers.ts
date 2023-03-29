import { Router } from 'express'
const router = Router()

import { getAllProducers } from '../db/db'

router.get('/producers', (req, res) => {
  getAllProducers()
    .then((producer) => {
      res.json(producer)
    })
    .catch((err: Error) => res.status(500).send(err.message))
})

export default router
