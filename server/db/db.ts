import connection from './connection'

import { Movie } from '../../common/types'

export function getAllMoviesDB(db = connection): Promise<Movie[]> {
  return db('movies').select('*')
}

// export function getMovieDB(id: number, db = connection): Promise<Movie> {
//   return db('movies').select('*').where('id', id)
// }

//export function deleteMovie(id: number, db = connection): Promise<Movie> {}
