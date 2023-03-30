import request from 'superagent'

function fetchScheduler() {
  console.log('Internal API Call')

  return request
    .get('/api/v1/scheduler/allschedule')
    .then((res) => {
      return res.body
    })
    .catch((err) => {
      return err.message
    })
}

export default fetchScheduler
