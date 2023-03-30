//Actions

import type { ThunkAction } from '../store' // For TS type
import {CollectionData} from '../../models/Collections'
import { fetchCollections, makeNewAPI, delCollectionAPI, updateCollectionAPI} from '../apis/collections'


export const REQUEST_COLLECTION = 'ADD_COLLECTION'
export const RECEIVE_COLLECTION = 'RECEIVE_COLLECTION'
// export const ADD_NEW_COLLECTION = 'ADD_NEW_COLLECTION'
export const DEL_COLLECTION ='DEL_COLLECTION'
// export const UPDATE_COLLECTION = 'UPDATE_COLLECTION'

export type CollectionsActions =
  |{ type: typeof REQUEST_COLLECTION, payload: null }
  |{ type: typeof RECEIVE_COLLECTION, payload: CollectionData[]}
  |{type: typeof DEL_COLLECTION, payload: number}

// ACTION CREATORS
export function getAllCollections(): CollectionsActions { 
  return {
    type: REQUEST_COLLECTION,
    payload:  null    
  }
}

export function receiveAllCollections(collection: CollectionData[]): CollectionsActions{
  return {
    type: RECEIVE_COLLECTION,
    payload:collection
  }
}

export const delCollectionACT = (id: number) => ({
  type: DEL_COLLECTION,
  payload: id,
});



//////////////////////////////////////////

export function fetchAllCollections(): ThunkAction{
  return(dispatch) => {
    //this is defined on this page
    dispatch(getAllCollections())
     //fetch collection is api client
    return fetchCollections()
      .then((anything) => {
        //this is defined on this page
        dispatch(receiveAllCollections(anything))
      })
      .catch((err) => {
        return err.message
      })
  }
}

// export function fetchAllCollections(): ThunkAction {
//   return async (dispatch) => {
//     //fetch collection is api client
//     fetchCollections()
//       .then((things) => {
//         console.log(things)
//         //this is defined on this page
//         dispatch(receiveAllCollections(things))
//       })
//       .catch((err) => {
//         console.log(err.message)
//       })
//   }
// }



export function delCollections(id:number): ThunkAction{
  console.log('hi there')
  return(dispatch) => {
      //delCollection is api client
    return delCollectionAPI(id)
      .then(() => {
        //function on this page
        console.log('Item deleted successfully!');
        dispatch(delCollectionACT(id))
      })
      .catch((err) => {
        console.log('Error deleting item:', err);
        return err.message
      })
  }
}



// export function addNewAction(item: CollectionData): ThunkAction {
//   return async (dispatch) => {
//     makeNewAPI(item)
//       .then((newThing: CollectionData[]) => {
//         console.log(newThing)
//         dispatch(receiveAllCollections(newThing))
//       })
//       .catch((err) => {
//         console.log(err.message)
//       })
//   }
// }


