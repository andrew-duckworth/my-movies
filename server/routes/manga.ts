import { Router } from 'express'
import { getAllManga } from '../db/db'
import { Routemanga } from '../../common/manga'

const router = Router()

router.get('/', (req, res) => {
  getAllManga()
    .then((mangaArr) => {
      res.json(mangaArr)
    })
    .catch((e: Error) => res.status(500).send(e.message))
})

export default router
