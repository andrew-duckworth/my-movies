import connection from '../connection'
import { Joke, UserJoke } from '../../../common/models'

export function getAllJokes(db = connection): Promise<Joke[]> {
  return db('jokes').select()
}

export function getJokeById(id: number, db = connection): Promise<Joke> {
  return db('jokes').select().where('id', id).first()
}

export function addJoke(joke: UserJoke, db = connection): Promise<Joke[]> {
  return db('jokes').insert(joke).returning(['id', 'joke', 'punchline'])
}

export function deleteJoke(id: number, db = connection): Promise<number> {
  return db('jokes').del().where('id', id).returning(['id'])
}
