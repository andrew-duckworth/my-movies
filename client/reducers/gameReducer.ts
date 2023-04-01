import { Action } from '../actions/Actions'
import { Game } from '../../common/interfaces'

const initialState: Game[] = [
    {
      id: 1,
      name: 'Doom',
      released: '01 June 1993',
      image:
        'https://cdn.vox-cdn.com/thumbor/mrExCJXLLD1pRzJUU58v6Rw4XzI=/0x0:1280x720/920x613/filters:focal(538x258:742x462):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/65241723/doom_2016_key_art.0.jpeg',
    },
  ]
  
  function reducer(state = initialState, action: Action): Game[] {
    const { type, payload } = action
  
    switch (type) {
      case 'GOT_GAMES':
        return payload
      case 'ADD_GAME':
        return [...state, payload]
      case 'DEL_GAME':
        console.log(state.filter((e) => e.id !== payload))
        return state.filter((e) => e.id !== payload)
      default:
        return state
    }
  }
  
  export default reducer
  