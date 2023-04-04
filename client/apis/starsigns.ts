import request from 'superagent'
import { BigThree, Starsign } from '../../common/Starsign'

export function grabSigns(): Promise<Starsign[]> {
  return request.get('/api/v1/starsigns').then((res) => res.body)
}

export function grabUsers(): Promise<BigThree[]> {
  return request.get('/api/v1/bigthree').then((res) => res.body)
}

export function addAUser(user: BigThree): Promise<BigThree> {
  return request
    .post('/api/v1/bigthree')
    .send(user)
    .then((res) => res.body)
    .catch((err) => console.log(err.message))
}
