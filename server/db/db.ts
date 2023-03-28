import connection from './connection'
import { Show, DetailedShow } from '../../common/show'

export function getAllShows(db = connection): Promise<Show[]> {
  return db('shows').select('*')
}

export function addShow(newShow: Show, db = connection): Promise<Show[]> {
  return db('shows').insert({ ...newShow }, '*')
}

export function deleteShow(id: number, db = connection): Promise<number> {
  return db('shows').del().where('id', id)
}

export function updateShow(
  id: number,
  updatedShow: Show,
  db = connection
): Promise<DetailedShow[]> {
  return db('shows')
    .update({ ...updatedShow }, [
      'id',
      'name',
      'host',
      'img',
      'genre',
      'description',
      'tracklist',
      'resource',
    ])
    .where('id', id)
}
