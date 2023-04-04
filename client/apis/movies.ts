import request from 'superagent'

import { Movie } from '../../common/types'

const movieUrl = '/api/v1/movies'

export function fetchMovies(): Promise<Movie[]> {
  return request.get(movieUrl).then((res) => res.body)
}

export function addMovieApi(movie: Movie) {
  return request
    .post(movieUrl)
    .send(movie)
    .then((res) => {
      console.log('resbody is', res.body)
      return res.body
    })
}
