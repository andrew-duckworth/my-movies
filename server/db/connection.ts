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
  id: number,
  updatedName: Hamsters,
  db = connection
) {
  return db('hamsters')
    .update({ ...updatedName }, ['id', 'name'])
    .where('id', id)
}

export default connection
