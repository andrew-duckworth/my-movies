import request from 'superagent'
import { Movie } from '../../common/types'

const movieURL = '/api/v1/movies'

export function fetchMoviesAPI(): Promise<Movie[]> {
  return request.get(movieURL).then((res) => res.body)
}

// https://imdb-api.com/en/API/SearchMovie/${process.env.IMDB_KEY}/inception%202010
// https://imdb-api.com/en/API/SearchMovie/${process.env.IMDB_KEY}/inception 2010 - corrects to above
// https://imdb-api.com/en/API/SearchMovie/${process.env.IMDB_KEY}/inception
