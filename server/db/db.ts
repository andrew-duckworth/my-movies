import connection from './connection'
import { HikesInterface } from '../../common/Hikes'

export function getAllHikes(db = connection): Promise<HikesInterface[]> {
  return db('hikes').select('*')
}
