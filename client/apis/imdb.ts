import { ImdbMovie } from '../../common/types'
import request from 'superagent'

const imdbUrl = 'https://imdb-api.com/en/API/Search/'

export function searchForMovie(movie: string): Promise<ImdbMovie[]> {
  return request
    .get(`${imdbUrl}${process.env.IMDB_KEY}/${movie}`)
    .then((res) => {
      return res.body.results
    })
}

// https://imdb-api.com/en/API/Search/k_jsn7qsbf/inception
