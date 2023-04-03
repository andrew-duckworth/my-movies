import type { ThunkAction } from '../store'
import { Family, FamilyDetails } from '../../server/common/allModels'
import {
  fetchTheFamily,
  // getMemberById,
  addFamilyMember,
  delFamilyMember,
} from '../apis/apiClient'

export const REQUEST_FAMILY = 'REQUEST_FAMILY'
export const RECEIVE_FAMILY = 'RECEIVE_FAMILY'
export const LOAD_MEMBER = 'LOAD_MEMBER'
export const DEL_MEMBER = 'DEL_MEMBER'

//ACTION TYPES
export type FamilyActions =
  | { type: 'REQUEST_FAMILY'; payload: null }
  | { type: 'RECEIVE_FAMILY'; payload: Family[] }
  | { type: 'LOAD_MEMBER'; payload: number }
  | { type: 'ADD_MEMBER'; payload: Family }
  | { type: 'DEL_MEMBER'; payload: number }

// ACTION CREATORS
export function requestFamily(): FamilyActions {
  console.log('Action - request family data: ')

  return {
    type: 'REQUEST_FAMILY',
    payload: null,
  }
}

export function receiveFamily(allData: Family[]): FamilyActions {
  console.log('Action - receieved all family data: ', allData)

  return {
    type: 'RECEIVE_FAMILY',
    payload: allData,
  }
}

export function addMember(newData: Family): FamilyActions {
  console.log('Action - adding member : ', newData)

  return {
    type: 'ADD_MEMBER',
    payload: newData,
  }
}

export function delMember(id: number): FamilyActions {
  console.log('Action - deleting member : ', id)

  return {
    type: 'DEL_MEMBER',
    payload: id,
  }
}

// THUNK ACTIONS
export function fetchAllData(): ThunkAction {
  return (dispatch) => {
    dispatch(requestFamily())
    // note fetchTheFamily is imported from APIClient
    return fetchTheFamily()
      .then((familyList) => {
        console.log('here is the family list: ', familyList)
        //note receive family is the function on this page
        dispatch(receiveFamily(familyList))
      })
      .catch((err) => {
        return err.message
      })
  }
}

export function deleteOneMember(id: number): ThunkAction {
  return (dispatch) => {
    //note delFamilyMember is imported from APIclient
    return delFamilyMember(id)
      .then(() => {
        //note delMember is the function on this page
        dispatch(delMember(id))
      })
      .catch((err) => {
        return err.message
      })
  }
}

export function addOneMember(newData: FamilyDetails): ThunkAction {
  return (dispatch) => {
    return addFamilyMember(newData)
      .then((newData) => {
        dispatch(addMember(newData))
      })
      .catch((err) => {
        return err.message
      })
  }
}

//FUNCTION STRUCTURE
// export function addNewAction(item: Family): ThunkAction {
//   return async (dispatch) => {
//     makeNewAPI(item)
//       .then((newThing: Family[]) => {
//         console.log(newThing)
//         dispatch(receiveAllCollections(newThing))
//       })
//       .catch((err) => {
//         console.log(err.message)
//       })
//   }
// }
