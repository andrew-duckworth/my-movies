import { Router } from 'express'
import {
  getAllManga,
  addManga,
  updateManga,
  deleteManga,
  getMangaById,
} from '../db/db'

const router = Router()

router.get('/', (req, res) => {
  getAllManga()
    .then((mangaArr) => {
      mangaArr.forEach((mangaItem) => {
        delete mangaItem.image_src
      })
      res.json(mangaArr)
    })
    .catch((e: Error) => res.status(500).send(e.message))
})

router.post('/', (req, res) => {
  const { title, books, author, location, imageSrc } = req.body
  const newManga = { title, books, author, location, image_src: imageSrc }
  addManga(newManga)
    .then(([addedManga]) => {
      delete addedManga.image_src
      res.json(addedManga)
    })
    .catch((e: Error) => res.status(500).send(e.message))
})

router.patch('/:id', (req, res) => {
  const { id, title, books, author, location, imageSrc } = req.body
  const updatedManga = {
    id,
    title,
    books,
    author,
    location,
    image_src: imageSrc,
  }
  // console.log(updatedManga)
  updateManga(Number(req.params.id), updatedManga)
    .then(([returned]) => {
      delete returned.image_src
      res.json(returned)
    })
    .catch((e: Error) => res.status(500).send(e.message))
})

router.delete('/:id', (req, res) => {
  deleteManga(Number(req.params.id))
    .then(() => {
      res.sendStatus(200)
    })
    .catch((e: Error) => res.status(500).send(e.message))
})

router.get('/:id', (req, res) => {
  getMangaById(Number(req.params.id))
    .then((mangaItem) => {
      delete mangaItem.image_src
      res.json(mangaItem)
    })
    .catch((e: Error) => res.status(500).send(e.message))
})

export default router
