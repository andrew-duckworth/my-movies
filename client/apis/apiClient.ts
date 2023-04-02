import request from 'superagent'
// import { response } from 'express/'
import { Movie } from '../models/movies'
const movieUrl = '/api/v1/movies/'

export function getMovies(): Promise<Movie[]> {
  return request.get(movieUrl).then((res) => res.body)
}
