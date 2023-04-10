import request from 'superagent'
import * as Models from '../../common/Starsign'

export function grabDetails(): Promise<Models.Chart[]> {
  return request.get('/api/v1/details').then((res) => res.body)
}
