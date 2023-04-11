import connection from "./connection";
import { Movie, MovieData } from '../../common/types'

export function getAllMovies(db = connection): Promise<Movie[]> {
  return db('movies').select('*')
}

export function addMovie(movie: MovieData, db = connection): Promise<Movie[]> {
  return db('movies').insert(movie).returning(['id', 'title', 'image', 'imdb_id', 'rating'])
}
