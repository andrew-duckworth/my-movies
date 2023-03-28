import request from 'superagent'
import { HikesInterface } from '../../common/Hikes'

export function getAllHikes(): Promise<HikesInterface[]> {
  return request.get('/api/v1/hikes').then((i) => i.body)
}
