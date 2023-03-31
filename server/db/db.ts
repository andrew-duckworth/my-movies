import { Bookdata, Book, Game, Gamedata } from '../../common/interfaces'

const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

export function getAllBooks(db = connection) {
  return db('books').select()
}

export function addBook(book: Bookdata, db = connection): Promise<Book> {
  return db('books').insert({ ...book }, '*')
}

export function deleteBook(id: number, db = connection): Promise<number> {
  return db('books').del().where('id', id)
}

export function getAllGames(db = connection) {
  return db('games').select()
}

export function addGame(game: Gamedata, db = connection): Promise<Game> {
  return db('games').insert({ ...game }, '*')
}

export function deleteGame(id: number, db = connection): Promise<number> {
  return db('games').del().where('id', id)
}
