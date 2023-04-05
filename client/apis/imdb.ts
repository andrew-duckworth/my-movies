import request from 'superagent'
import { ImdbMovie } from '../../common/types'

const imdbURL = 'api/v1/movies/'

export function searchForMovie(movie: string): Promise<ImdbMovie[]> {
  return request
    .get(`${imdbURL}${process.env.IMDB_KEY}/${movie}`)
    .then((res) => {
      console.log(`${imdbURL}${process.env.IMDB_KEY}`)
      return res.body.results
    })
}

export function deleteMovie(id: number): Promise<void> {
  return request.del(`${imdbURL}${id}`).then(() => {})
}
