import { CoffeeData } from '../../client/models/Coffee'
import connection from './connection'

export function getCoffeeData(db = connection): Promise<CoffeeData[]> {
  return db('coffee').select()
}
