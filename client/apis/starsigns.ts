import request from 'superagent'
import { BigThree } from '../../common/Starsign'

export function grabSigns() {
  return request.get('/api/v1/starsigns').then((res) => res.body)
}

export function grabUsers() {
  return request.get('/api/v1/bigthree').then((res) => res.body)
}

export function addAUser(user: BigThree): Promise<BigThree> {
  return request
    .post('/api/v1/bigthree')
    .send(user)
    .then((res) => res.body)
    .catch((err) => console.log(err.message))
}
