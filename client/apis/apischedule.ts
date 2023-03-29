import request from 'superagent'

export function fetchSchedule() {
  console.log('Internal API Call')

  return request
    .get('/api/v1/scheduler')
    .then((res) => {
      return res.body
    })
    .catch((err) => {
      return err.message
    })
}
