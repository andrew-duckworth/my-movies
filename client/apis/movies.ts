import request from 'superagent'
import { Movie } from '../../common/types'

const movieURL = '/api/v1/movies'

export function fetchMoviesAPI(): Promise<Movie[]> {
  return request.get(movieURL).then((res) => res.body)
}
