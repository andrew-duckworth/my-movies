import request from 'superagent'

export function fetchFest() {
  console.log('4: In the internal api call')

  return request
    .get('/api/v1/musicFestivals') // call internal api here
    .then((res) => {
      console.log('7: client api res: ', res.body)
      return res.body
    })
    .catch((err) => {
      return err.message
    })
}
