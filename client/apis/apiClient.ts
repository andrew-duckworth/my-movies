import request from 'superagent'
import { AlbumsInterface } from '../common/albums'

export function getAllAlbums(): Promise<AlbumsInterface[]> {
  return request.get('/api/v1/albums').then((i) => i.body)
}
