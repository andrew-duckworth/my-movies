import request from 'superagent'
import { MusicFestivalData } from '../../common/musicFestivalsTypes'

const getURL = '/api/v1/musicFestivals'
const postURL = '/api/v1/musicFestivals/add'

export function fetchFest() {
  console.log('4: In the internal api call')

  return request
    .get(getURL)
    .then((res) => {
      return res.body
    })
    .catch((err) => {
      return err.message
    })
}

export function addFest(fest: MusicFestivalData) {
  return request
    .post(postURL)
    .send(fest)
    .then((res) => {
      return res.body
    })
    .catch((err) => {
      return err.message
    })
}
