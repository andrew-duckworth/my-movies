import config from './knexfile'
import knex from 'knex'
import { BigThree, Starsign } from '../../common/Starsign'

type Environment = 'production' | 'test' | 'development'
const environment = (process.env.NODE_ENV as Environment) || 'development'
const connection = knex(config[environment])

export function getStarsigns(db = connection): Promise<Starsign[]> {
  return db('starsigns').select()
}

export function getUsers(db = connection): Promise<BigThree[]> {
  return db('bigthree').select()
}

export function addUser(user: BigThree, db = connection): Promise<BigThree[]> {
  return db('bigthree')
    .insert(user)
    .returning(['name', 'sun', 'moon', 'rising'])
}

export function deleteUser(id: number, db = connection): Promise<number> {
  return db('bigthree').del().where('id', id)
}

export function updateUser(user: BigThree, db = connection): Promise<number> {
  return db('bigthree').update(user).where('id', user.id)
}

export function getPlanetSign(db = connection) {
  return db('planets')
    .select(
      '*',
      'planets.id AS planet_id',
      'planets.name AS planet',
      'starsigns.name AS starsign'
    )
    .join('starsigns', 'planets.starsigns_id', 'starsigns.id')
}
