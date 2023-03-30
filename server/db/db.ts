import { Bookdata } from '../../common/interfaces'

const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

export function getAllBooks(db = connection) {
  return db('books').select()
}

export function addBook(book: Bookdata, db = connection) {
  return db('books').insert({ ...book }, '*')
}

export function deleteBook(id: number, db = connection) {
  return db('books').del().where('id', id)
}
