import request from 'superagent'
import { Movie } from '../../common/types'

const movieUrl = '/api/v1/movies'

export function fetchMovies(): Promise<Movie[]> {
  return request.get(movieUrl).then((res) => res.body)
}
