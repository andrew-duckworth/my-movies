import type { ThunkAction } from '../store' // For TS type
import {RawCollectionData, CollectionData} from '../../models/Collections'
import { fetchCollections } from '../apis/collections'



export const  REQUEST_COLLECTION = 'ADD_COLLECTION'
export const RECEIVE_COLLECTION = 'RECEIVE_COLLECTION'

export type CollectionsActions =
  |{ type: typeof REQUEST_COLLECTION, payload: null }
  |{ type: typeof RECEIVE_COLLECTION, payload: CollectionData}

// ACTION CREATORS

export function getAllCollections(): CollectionsActions { 
  return {
    type: REQUEST_COLLECTION,
    payload:  null
    
  }
}


export function receiveAllCollections(collection: RawCollectionData): CollectionsActions{
  return {
    type: RECEIVE_COLLECTION,
    payload:collection
  }
}

export function fetchAllCollections(): ThunkAction{

  return(dispatch) => {
    dispatch(getAllCollections())
    return fetchCollections()
    .then((theCollection) => {
      dispatch(receiveAllCollections(theCollection))
    })
    .catch((err) => {
      return err.message
    })

  }
}