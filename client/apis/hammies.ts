import request from 'superagent'

const hamstersUrl = '/api/v1/hamsters'

function fetchHamsters() {
  return request.get(hamstersUrl).then((res) => res.body)
}

export function updateHammies(oldHammy: string, newHammy: string) {
  return request
    .patch(`/api/v1/hamsters/${oldHammy}`)
    .send(newHammy)
    .then((res) => {
      return res.body
    })
}

export default fetchHamsters
