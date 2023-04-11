import request from 'superagent'
import { Data, Movie } from '../../common/types'

const url = '/api/v1/movies'

export function fetchMoviesAPI(): Promise<Movie[]> {
  return request.get(url).then((res) => res.body)
}

export function postMovieAPI(movie: Data) {
  return request
    .post(url)
    .send(movie)
    .then((res) => res.body)
}
