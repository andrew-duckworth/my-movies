import { MusicFestivalAction } from '../actions/musicFestival'
// import { MusicFestivalData } from '../../common/musicFestivalsTypes'

const initialState = [
  { name: 'Jimbo', country: 'Magicland', date: '01 April' },
  { name: 'Fartrell Cluggins', country: 'New Yoooorkkk', date: '29 Feb' },
]

function reducer(state = initialState, action: MusicFestivalAction): object[] {
  const { type, payload } = action

  switch (type) {
    case 'ADD_MUSICFESTIVAL':
      return [...state, payload]
  }
}

export default reducer
