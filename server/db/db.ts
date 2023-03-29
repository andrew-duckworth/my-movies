import connection from './connection'
import { AlbumsInterface } from '../../client/common/albums'

export function getAllAlbums(db = connection): Promise<AlbumsInterface[]> {
  return db('albums').select('id', 'name', 'year', 'image')
}
