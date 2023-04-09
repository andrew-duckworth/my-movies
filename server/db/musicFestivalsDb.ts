import connection from './connection'

import { MusicFestivalDetails } from '../../common/musicFestivalsTypes'

export function getAllFestivals(
  db = connection
): Promise<MusicFestivalDetails[]> {
  return db('musicFestivals').select('*')
}

// TO DO add new musicFestFunc
