//DATABASE///


import knexFile from './knexfile'
import knex from 'knex'

import { CollectionData } from '../../models/Collections'

type Environment = 'production' | 'test' | 'development'

const environment = (process.env.NODE_ENV || 'development') as Environment
const config = knexFile[environment]
const connection = knex(config)


export function getCollectionsBD(db = connection): Promise<CollectionData[]> {
    return db('collections').select()
}










export default connection