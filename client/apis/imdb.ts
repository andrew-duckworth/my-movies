import request from 'superagent'
import { ImdbMovie } from '../../common/types'

const imdbURL = 'https://imdb-api.com/en/API/SearchMovie'

export function searchForMovie(movie: string): Promise<ImdbMovie[]> {
  return request
    .get(`${imdbURL}/${process.env.IMDB_KEY}/${movie}`)
    .then((res) => {
      return res.body.results
    })
}
