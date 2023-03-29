import request from 'superagent'

export function grabSigns() {
  return request.get('/api/v1/starsigns').then((res) => res.body)
}
