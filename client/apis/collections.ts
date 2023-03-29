//API CLIENT//
import request from 'superagent'

const collUrl = '/api/v1/collections'

export function fetchCollections() {
    return request
    .get(collUrl) // call internal api here
    .then((res) => {return res.body})
    .catch((err) => {return err.message})
}

// export function getANoteCS(id:number) {
//     return request
//     .get(`/api/v1/collections/${id}`) // call internal api here
//     .then((res) => {return res.body})
//     .catch((err) => {return err.message})
// }