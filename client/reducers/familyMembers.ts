import { FamilyActions } from '../actions/familyMembers'
import { useAppSelector } from '../hooks/redux'

const initialState = [
  { id: 1, name: 'Jorga', nickname: 'Jorgie', position: 'Cousin' },
]

function reducer(state = initialState, action: FamilyActions): any[] {
  const { type, payload } = action

  switch (type) {
    case 'LOAD_FAMILY':
      return state
    // case 'DELETE_MEMBER' :
    //   return state.filter(str => str !== payload)
    default:
      return state
  }
}

export default reducer
