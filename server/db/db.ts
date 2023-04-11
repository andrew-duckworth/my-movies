import config from './knexfile'
import knex from 'knex'
import { UserChart, Starsign } from '../../common/Starsign'

type Environment = 'production' | 'test' | 'development'
const environment = (process.env.NODE_ENV as Environment) || 'development'
const connection = knex(config[environment])

export function getStarsigns(db = connection): Promise<Starsign[]> {
  return db('starsigns').select()
}

export function getUsers(db = connection): Promise<UserChart[]> {
  return db('user_chart').select()
}

export function addUser(
  user: UserChart,
  db = connection
): Promise<UserChart[]> {
  return db('user_chart')
    .insert(user)
    .returning(['name', 'sun', 'moon', 'rising'])
}

export function deleteUser(id: number, db = connection): Promise<number> {
  return db('user_chart').del().where('id', id)
}

export function updateUser(user: UserChart, db = connection): Promise<number> {
  return db('user_chart').update(user).where('id', user.id)
}
