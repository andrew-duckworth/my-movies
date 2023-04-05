export interface MovieData {
  imdb_id: string
  title: string
  image: string
  rating?: number
}

export interface Movie extends MovieData {
  id: number
}

export interface ImdbMovie {
  id: string
  resultType: string
  image: string
  title: string
  description: string
}
