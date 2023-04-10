import knexFile from './knexfile'
import knex from 'knex'

type Environment = 'production' | 'test' | 'development'

const environment = (process.env.NODE_ENV || 'development') as Environment
const config = knexFile[environment]
const connection = knex(config)

<<<<<<< HEAD
export function getMovies(db = connection): Promise<Movie[]> {
  return db('movies').select()
}

export function delMovie(id: number, db = connection) {
  return db('movies').select().where('id', id).delete()
}
=======
>>>>>>> 98491ed1d81d6885aa7872b245f1768da4c0ce99
export default connection
