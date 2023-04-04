import request from 'superagent'
// import { response } from 'express/'
import { Movie } from '../models/movies'
const movieUrl = '/api/v1/movies/'

export function getMovies(): Promise<Movie[]> {
  return request.get(movieUrl).then((res) => res.body)
}

export function delMovie(id: number) {
  return request.del(`${movieUrl}${id}`).then((res) => {
    console.log('API response', res.body)
    return res.body
  })
}

// export function updateHammies(id: number, newHammy: string) {
//   const obj = { name: newHammy }
//   console.log('updateHammies(API)', id, obj)
//   return request
//     .patch(`/api/v1/hamsters/${id}`)
//     .send(obj)
//     .then((res) => {
//       console.log('API response:', res.body)
//       return res.body
//     })
// }
