import { RECEIVE_COLLECTION, CollectionsActions } from '../actions/collectionAction'
import {CollectionData} from '../../models/Collections'

//array of objects, collectionData is an object
const initialState = [] as CollectionData[]

function theReducer( state = initialState, action:CollectionsActions) : CollectionData[] {
    const { type, payload } = action

    switch (type) {
      case  RECEIVE_COLLECTION:
        return payload  
  
      default:
        return state
    }
}


export default  theReducer