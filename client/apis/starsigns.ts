import request from 'superagent'
import { BigThree } from '../../common/Starsign'

export function grabSigns() {
  return request.get('/api/v1/starsigns').then((res) => res.body)
}

export function grabUsers() {
  return request.get('/api/v1/bigthree').then((res) => res.body)
}
