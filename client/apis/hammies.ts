import request from 'superagent'

const hamstersUrl = '/api/v1/hamsters'

function fetchHamsters() {
  return request.get(hamstersUrl).then((res) => res.body)
}

export function updateHammies() {
  return request.patch(hamstersUrl).then((res) => res.body)
}

export default fetchHamsters
