import request from 'superagent'
import { Joke, UserJoke } from '../../common/models'

const jokesURL = '/api/v1/database/jokes'

export function fetchJokes(): Promise<Joke[]> {
  return request.get(`${jokesURL}/all`).then((jokes) => jokes.body)
}

export function fetchJokeById(id: number): Promise<Joke> {
  return request.get(`${jokesURL}/${id}`).then((joke) => joke.body)
}

export function sendNewJoke(joke: UserJoke): Promise<Joke> {
  return request
    .post(`${jokesURL}/add`)
    .send(joke)
    .then((joke) => joke.body)
}

export function removeJokeById(id: number): Promise<number> {
  return request
    .delete(`${jokesURL}/delete/${id}`)
    .then((numberDeleted) => numberDeleted.body)
}
