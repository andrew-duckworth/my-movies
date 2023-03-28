import request from 'superagent'
import { Joke } from '../../common/models'

const jokesURL = '/api/v1/database/jokes'

export function fetchJokes(): Promise<Joke[]> {
  return request.get(jokesURL).then((jokes) => jokes.body)
}
