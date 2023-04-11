import request from 'superagent'
import * as Models from '../../common/Starsign'

export function grabSigns(): Promise<Models.Starsign[]> {
  return request.get('/api/v1/starsigns').then((res) => res.body)
}

export function grabUsers(): Promise<Models.UserChart[]> {
  return request.get('/api/v1/usercharts').then((res) => res.body)
}

export function addAUser(user: Models.UserChartData) {
  return request
    .post('/api/v1/usercharts')
    .send(user)
    .then((res) => res.body)
    .catch((err) => console.log('api', err.message))
}

export function deleteAUser(id: number) {
  return request
    .delete(`/api/v1/usercharts/delete/${id}`)
    .then((dltdUser) => dltdUser.body)
}

export function updateAUser(user: Models.UserChart) {
  return request
    .patch(`/api/v1/usercharts/update/`)
    .send(user)
    .then((res) => res.body)
}
