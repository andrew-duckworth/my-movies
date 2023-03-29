import connection from './connection'

import { musicFestivalDetails } from '../../common/musicFestivalsTypes'

export function getAllFestivals(
  db = connection
): Promise<musicFestivalDetails[]> {
  return db('musicFestivals').select('*')
}
