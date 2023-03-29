import { Router } from 'express'
import { getAllFestivals } from '../db/musicFestivalsDb'

const router = Router()

router.get('/', (req, res) => {
  getAllFestivals()
    .then((festivals) => {
      res.json(festivals)
    })
    .catch((err) => res.status(500).send(err.message))
})

export default router
