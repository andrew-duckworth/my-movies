import { Router } from 'express'
const router = Router()

import { getAllSchedule, getAllScheduleWithShows } from '../db/db'

router.get('/', (req, res) => {
  getAllSchedule()
    .then((schedule) => {
      res.json(schedule)
    })
    .catch((err: Error) => res.status(500).send(err.message))
})

router.get('/allschedule', (req, res) => {
  getAllScheduleWithShows()
    .then((e) => {
      res.json(e)
    })
    .catch((err: Error) => res.status(500).send(err.message))
})

export default router
