import { RECEIVE_COLLECTION, CollectionsActions } from '../actions/collectionAction'
import {CollectionData} from '../../models/Collections'

const initialState: CollectionData = {
    //id:id,
    // title:title,
    // content:content,
    // category:category
    id: Number(''),
    title:'',
    content:'',
    category:''
}

function theCollection( state = initialState, action:CollectionsActions) : CollectionData {
    const { type, payload } = action

    switch (type) {
      case  RECEIVE_COLLECTION:
        return payload
  
  
      default:
        return state
    }
}


export default  theCollection