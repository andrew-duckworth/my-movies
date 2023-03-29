import { Router } from 'express'
const router = Router()

import { getAllSchedule } from '../db/db'

router.get('/schedule', (req, res) => {
  getAllSchedule()
    .then((schedule) => {
      res.json(schedule)
    })
    .catch((err: Error) => res.status(500).send(err.message))
})

export default router
