// For API

export interface Data {
  imdb_id: string
  title: string
  image: string
  rating?: number
}

export interface Movie extends Data {
  id: number
  [Symbol.iterator](): Iterator<Movie>
  //Got this code from ChatGPT and I don't understand it but it fixes my TS issues in server/routes/movies
}

export interface Imdb {
  id: string
  resultType: string
  image: string
  title: string
  description: string
}
