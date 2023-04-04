import request from 'superagent'
import { Movie } from '../../common/types'

const movieUrl = 'api/v1/movies'

export function fetchMovies(): Promise<Movie[]> {
  return request.get(movieUrl).then((res) => res.body)
}

export function postOneMovie(movie: Movie) {
  return request
    .post(movieUrl)
    .send(movie)
    .then((res) => {
      return res.body
    })
}
