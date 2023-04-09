import connection from './connection'

import { MusicFestivalDetails } from '../../common/musicFestivalsTypes'
import { MusicFestivalData } from '../../common/musicFestivalsTypes'

export function getAllFestivals(
  db = connection
): Promise<MusicFestivalDetails[]> {
  return db('musicFestivals').select('*')
}

// TO DO add new musicFestFunc

export function addFestivalDb(
  formData: MusicFestivalData,
  db = connection
): Promise<MusicFestivalDetails> {
  return db('musicFestivals')
    .insert(formData)
    .returning(['id', 'name', 'country', 'date'])
}
