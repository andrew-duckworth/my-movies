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

export function updHamsters(id: string, obj: object, db = connection) {
  console.log('sent connection data:', id, obj)
  return db('hamsters')
    .select()
    .where('id', id)
    .update({ name: obj })
    .returning(['name'])
  // .then((data) => {
  //   console.log('returned connection data:', data)
  // })
}

export default connection
