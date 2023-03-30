import { RECEIVE_COLLECTION , DEL_COLLECTION, CollectionsActions } from '../actions/collectionAction'
import {CollectionData} from '../../models/Collections'

//array of objects, collectionData is an object
const initialState = [] as CollectionData[]

function theReducer( state = initialState, action:CollectionsActions) : CollectionData[] {
    const { type, payload } = action

    switch (type) {
      case RECEIVE_COLLECTION:
        return payload;
      // case ADD_NEW_COLLECTION:
      //   return [...state, payload];
      case DEL_COLLECTION:
        return state.filter((collections) => collections.id !== payload);
      default:
        return state;
    }
}


export default  theReducer