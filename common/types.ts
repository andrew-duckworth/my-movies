export interface Data {
  imdb_id: string
  title: string
  image: string
  rating?: number
}

export interface Movie extends Data {
  id: number
}

export interface Imdb {
  id: string
  resultType: string
  image: string
  title: string
  description: string
}
