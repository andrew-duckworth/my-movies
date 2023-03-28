import connection from '../connection'
import { Joke } from '../../../common/models'

export function getAllJokes(db = connection): Promise<Joke[]> {
  return db('jokes').select()
}

export function getJokeById(id: number, db = connection): Promise<Joke> {
  return db('jokes').select().where('id', id).first()
}
