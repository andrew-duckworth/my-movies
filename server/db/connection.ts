import knexFile from './knexfile'
import knex from 'knex'
import { Hamsters } from '../../models/hamster'

type Environment = 'production' | 'test' | 'development'

const environment = (process.env.NODE_ENV || 'development') as Environment
const config = knexFile[environment]
const connection = knex(config)

export function getAllHamsters(db = connection): Promise<Hamsters[]> {
  return db('hamsters').select()
}

export function updHamsters(
  oldHammy: string,
  newHammy: string,
  db = connection
) {
  return db('hamsters')
    .update({ ...updatedName }, ['id', 'name'])
    .where('name', oldHammy)
}

export default connection
