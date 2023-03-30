import request from 'superagent'

const hamstersUrl = '/api/v1/hamsters'

export function fetchHamsters() {
  return request.get(hamstersUrl).then((res) => res.body)
}

export function updateHammies(id: number, newHammy: string) {
  console.log('updateHammies(API)', id, newHammy)
  return request
    .patch(`/api/v1/hamsters/${id}`)
    .send(newHammy)
    .then((res) => {
      console.log('res.bdy:', res.body)
      return res.body
    })
}
