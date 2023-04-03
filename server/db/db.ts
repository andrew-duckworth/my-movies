import connection from './connection'
import { Movie } from '../../common/types'

export function getAllMovies(db = connection): Promise<Movie[]> {
  return db('movies').select()
}
