import request from "superagent";
import {ImdbMovie} from '../../common/types'

const imdbUrl = 'https://imdb-api.com/en/API/SearchMovie'

export function searchForMovie(movie: string): Promise<ImdbMovie[]>{
  return request
    // .get(`${imdbUrl}/${process.env.IMDB_KEY}/${movie}`)
    .get(`https://imdb-api.com/en/API/SearchMovie/${process.env.IMDB_KEY}/${movie}`)
    .then((res) => {
      console.log('api call: ', res.body.results)
      return res.body.results
    })
}