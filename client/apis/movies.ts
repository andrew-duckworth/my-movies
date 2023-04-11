import request from 'superagent'
import { Data, Movie } from '../../common/types'

const movieURL = '/api/v1/movies'

export function fetchMoviesAPI(): Promise<Movie[]> {
  return request.get(movieURL).then((res) => res.body)
}

export function postMovieAPI(movie: Data) {
  return request
    .post(movieURL)
    .send(movie)
    .then((res) => res.body)
}
