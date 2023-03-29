import request from 'superagent'
import { Family } from '../../server/common/allModels'

export function fetchTheFamily(): Promise<Family[]> {
  return request
    .get('/api/v1/family')
    .then((responseObj) => {
      return responseObj.body
    })
    .catch(errorHandler('GET', '/v1/family'))
}

export function getMemberById(): Promise<Family> {
  return request
    .get('api/v1/family/:id')
    .then((res) => {
      return res.body
    })
    .catch(errorHandler('GET', '/v1/family/:id'))
}

export function addFamilyMember(member: Family): Promise<Family> {
  return request
    .post('/v1/family')
    .send(member)
    .then((res) => {
      return res.body
    })
    .catch(errorHandler('ADD', '/v1/family'))
}

export function delFamilyMember(memberId: number): Promise<Family> {
  return request
    .del(`/v1/family/${memberId}`)
    .then((res) => {
      return res.body
    })
    .catch(errorHandler('ADD', '/v1/family'))
}

//error handler for the catch above :)

function errorHandler(method: string, route: string) {
  return (err: Error) => {
    if (err.message === 'Not Found') {
      throw Error(
        `Error: You need to implement an API route for ${method} ${route}`
      )
    } else {
      throw Error(`${err.message} on ${method} ${route}`)
    }
  }
}
