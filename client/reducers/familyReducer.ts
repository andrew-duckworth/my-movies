import { FamilyActions } from '../actions/familyActions'
import { Family } from '../../server/common/allModels'

const initialState = [] as Family[]

function mainReducer(state = initialState, action: FamilyActions): Family[] {
  const { type, payload } = action

  switch (type) {
    case 'RECEIVE_FAMILY':
      return payload
    case 'DEL_MEMBER':
      return state.filter((str) => str.id !== payload)
    default:
      return state
  }
}

export default mainReducer
