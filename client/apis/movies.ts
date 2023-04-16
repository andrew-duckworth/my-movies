import request from 'superagent'
import { Movie, MovieData } from '../../common/types'

const movieUrl = 'api/v1/movies/'

export function fetchMovies(): Promise<Movie[]> {
  return request.get(movieUrl).then((res) => res.body)
}

export function postOneMovie(movie: MovieData) {
  return request
    .post(movieUrl)
    .send(movie)
    .then((res) => {
      console.log(res.body)
      return res.body
    })
}

// export function deleteMovie(id: number): Promise<void> {
//   return request.del(`${movieUrl}${id}`).then((res) => {
//     return res.body
//   })
// }
export function deleteMovie(id: number): Promise<void> {
  return request.del(`${movieUrl}${id}`).then(() => {})
}
