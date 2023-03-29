import connection from './connection'
import { Manga, Routemanga } from '../../common/manga'

export function getAllManga(db = connection): Promise<Routemanga[]> {
  return db('manga').select('*', 'image_src AS imageSrc')
}
