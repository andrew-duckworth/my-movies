import connection from './connection'
import { Manga, Routemanga } from '../../common/manga'

export function getAllManga(db = connection): Promise<Routemanga[]> {
  return db('manga').select(
    '*',
    'series_num AS seriesNum',
    'image_src AS imageSrc'
  )
}
