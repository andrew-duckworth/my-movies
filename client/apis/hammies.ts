import request from 'superagent'

const hamstersUrl = '/api/va/hamsters'

export function fetchHamsters() {
  return request.get(hamstersUrl).then((res) => res.body)
}
