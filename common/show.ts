export interface Show {
  id?: number
  name: string
  genres: string
  description: string
  tracklist: string
  audio_length: string
  img: string
}

export interface DetailedShow extends Show {
  resource: string
}
