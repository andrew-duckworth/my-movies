import request from 'superagent'
import { Imdb } from '../../common/types'

const url = 'https://imdb-api.com/en/API/SearchMovie'

export function searchMoviesAPI(movie: string): Promise<Imdb[]> {
  return request
    .get(`${url}/${process.env.IMDB_KEY}/${movie}`)
    .then((res) => res.body.results)
}
