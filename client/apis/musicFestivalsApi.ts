import request from 'superagent'
import {
  MusicFestivalData,
  MusicFestivalDetails,
} from '../../common/musicFestivalsTypes'

const getURL = '/api/v1/musicFestivals'
const postURL = '/api/v1/musicFestivals/add'

export function fetchFest() {
  console.log('4: In the internal api call')

  return request
    .get(getURL) // call internal api here
    .then((res) => {
      console.log('7: client api res: ', res.body)
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
      console.log('7: client api res: ', res.body)
      return res.body
    })
    .catch((err) => {
      return err.message
    })
}
