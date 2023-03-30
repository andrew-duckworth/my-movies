import request from 'superagent'

const hamstersUrl = '/api/v1/hamsters'

export function fetchHamsters() {
  return request.get(hamstersUrl).then((res) => res.body)
}

export function updateHammies(id: number, newHammy: string) {
  const obj = { name: newHammy }
  console.log('updateHammies(API)', id, obj)
  return request
    .patch(`/api/v1/hamsters/${id}`)
    .send(obj)
    .then((res) => {
      console.log('API response:', res.body)
      return res.body
    })
}
