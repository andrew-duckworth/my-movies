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

export function updHamsters(id: string, name: string, db = connection) {
  console.log('connection:', id, name)
  return db('hamsters').select().where('id', id).update({ name: name })
}

export default connection
