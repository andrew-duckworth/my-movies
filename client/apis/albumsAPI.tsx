import request from 'superagent'

export function getAlbums() {
  return request
    .get('/api/v1/albums')
    .then((res) => {
      console.log(res.body)
      return res.body
    })
    .catch((err) => {
      console.log('Err messages: ' + err)
    })
}
