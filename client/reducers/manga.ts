import { Action } from '../actions/index'
import { RECEIVE_ALL_MANGA, TOGGLE_EDIT } from '../actions/manga'
import { Manga, MangaEdit } from '../../common/manga'

const initialState: MangaEdit[] = []

function mangaReducer(state = initialState, action: Action): MangaEdit[] {
  const { type, payload } = action

  switch (type) {
    case RECEIVE_ALL_MANGA:
      for (let i = 0; i < payload.length; i++) {
        payload[i].edit = false
      }
      return payload
    case TOGGLE_EDIT:
      // const changedState = [...state]
      for (let i = 0; i < state.length; i++) {
        if (Number(state[i].id) === Number(payload)) {
          state[i].edit = !state[i].edit
        }
      }
      return [...state]
    default:
      return state
  }
}

export default mangaReducer
// import { Action } from '../actions/index'
// import { RECEIVE_ALL_MANGA, TOGGLE_EDIT } from '../actions/manga'
// import { Manga, MangaEdit } from '../../common/manga'

// const initialState: MangaEdit[] = []

// function mangaReducer(state = initialState, action: Action): MangaEdit[] {
//   const { type, payload } = action

//   switch (type) {
//     case RECEIVE_ALL_MANGA:
//       for (let i = 0; i < payload.length; i++) {
//         payload[i].edit = false
//       }
//       return payload
//     case TOGGLE_EDIT:
//       // const changedState = [...state]
//       // for (let i = 0; i < state.length; i++) {
//       //   if (Number(state[i].id) === Number(payload)) {
//       //     state[i].edit = !state[i].edit
//       //   }
//       // }

//       return editableItem(state, payload)

//     default:
//       return state
//   }
// }

// export default mangaReducer

// function editableItem(state, payload) {
//   const newState = state.map((item) => {
//     if (item.id === Number(payload)) {
//       item.edit = true
//       return item
//     } else {
//       return item
//     }
//   })
//   return newState
// }
