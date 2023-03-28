import { join } from 'node:path'
import { Router } from 'express'
const router = Router()

import { getAllShows, addShow, deleteShow, updateShow } from '../db/db'

router.get('/', (req, res) => {
  res.sendFile(join(__dirname, './public/index.html'))
})

export default router
