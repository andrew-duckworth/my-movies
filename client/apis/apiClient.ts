import request from 'superagent'
import { Albums } from '../common/albums'

export function getAllAlbums(): Promise<Albums[]> {
  return request.get('/api/v1/albums').then((i) => i.body)
}
