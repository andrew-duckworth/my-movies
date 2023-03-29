import express from 'express'
import { getAllAlbums } from '../db/db'

const router = express.Router()

router.use(express.json())

router.get('/', (req, res) => {
  getAllAlbums()
    .then((albums) => {
      res.json(albums)
    })
    .catch((err) => {
      console.log(err.message)
    })
})

export default router
