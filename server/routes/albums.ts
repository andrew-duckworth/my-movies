import express from 'express'
import * as db from '../db/db'
const router = express.Router()

router.use(express.json())

router.get('/', (req, res) => {
  db.getAllAlbums()
    .then((albums) => {
      res.json(albums)
    })
    .catch((err) => {
      console.log(err.message)
    })
})

router.post('/', (req, res) => {
  const album = req.body
  db.addAlbum(album)
    .then((albumArray) => {
      res.json(albumArray[0])
    })
    .catch((err) => console.log(err.message))
})

router.delete('/:id', (req, res) => {
  const id = Number(req.params.id)
  db.deleteAlbum(id)
    .then(() => res.status(200).send('Deleted!'))
    .catch((err) => err.message)
})
export default router
