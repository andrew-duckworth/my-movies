import request from 'superagent'
import { BigThree, BigThreeData, Starsign } from '../../common/Starsign'

export function grabSigns(): Promise<Starsign[]> {
  return request.get('/api/v1/starsigns').then((res) => res.body)
}

export function grabUsers(): Promise<BigThree[]> {
  return request.get('/api/v1/bigthree').then((res) => res.body)
}

export function addAUser(user: BigThreeData) {
  return request
    .post('/api/v1/bigthree')
    .send(user)
    .then((res) => res.body)
    .catch((err) => console.log('api', err.message))
}
