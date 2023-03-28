import express from 'express'
import request from 'superagent'
import { getAllBooks } from '../db/db'
import { Book } from '../../common/interfaces'

const router = express.Router()

router.use(express.json())

router.get('/', (req, res) => {
  return getAllBooks().then((books: Book[]) => res.json(books))
})

export default router
