import connection from './connection'
import { Manga, Routemanga } from '../../common/manga'

export function getAllManga(db = connection): Promise<Routemanga[]> {
  return db('manga').select('*', 'image_src AS imageSrc')
}

export function addManga(
  newManga: Manga,
  db = connection
): Promise<Routemanga[]> {
  return db('manga').insert(newManga).returning(['*', 'image_src AS imageSrc'])
}

export function updateManga(
  id: number,
  updatedManga: Manga,
  db = connection
): Promise<Routemanga[]> {
  return db('manga')
    .update(updatedManga)
    .returning(['*', 'image_src AS imageSrc'])
    .where('id', id)
}

export function deleteManga(id: number, db = connection): Promise<number> {
  return db('manga').del().where('id', id)
}

export function getMangaById(id: number, db = connection): Promise<Routemanga> {
  return db('manga')
    .select('*', 'image_src AS imageSrc')
    .where('id', id)
    .first()
}
