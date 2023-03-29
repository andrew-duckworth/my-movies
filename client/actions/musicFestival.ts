import { MusicFestivalData } from '../../common/musicFestivalsTypes'

export type MusicFestivalAction = {
  type: 'ADD_MUSICFESTIVAL'
  payload: { name: string; country: string; date: string }
}

export function addMusicFestival(
  newFest: MusicFestivalData
): MusicFestivalAction {
  return {
    type: 'ADD_MUSICFESTIVAL',
    payload: newFest,
  }
}
