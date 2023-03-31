import express from 'express'
import { getAllBooks, deleteBook, addBook } from '../db/db'
import { Book, Bookdata } from '../../common/interfaces'

const router = express.Router()

router.use(express.json())

router.get('/', (req, res) => {
  return getAllBooks().then((books: Book[]) => res.json(books))
})

router.post('/', (req, res) => {
  const bookData: Bookdata = req.body
  return addBook(bookData).then((addedBook: Book) => {
    res.json(addedBook)
  })
})

router.delete('/', (req, res) => {
  const id = Number(req.body.id)
  return deleteBook(id).then((response) => {
    return res.json(response)
  })
})

export default router
