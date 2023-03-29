const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

export function getAllBooks(db = connection) {
  return db('books').select()
}

export function addBook(book, db = connection)
