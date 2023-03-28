import knexFile from './knexfile'
import knex from 'knex'
import { Movie } from '../../client/models/movies'

type Environment = 'production' | 'test' | 'development'

const environment = (process.env.NODE_ENV || 'development') as Environment
const config = knexFile[environment]
const connection = knex(config)

export function getMovies(db = connection): Promise<Movie[]> {
  return db('movies').select()
}

export default connection
