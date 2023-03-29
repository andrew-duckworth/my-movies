export interface MoviesData {
  id: number
  title: string
  director: string
  movieImage: string
}

export type RawMovieDataArr = { data: MoviesData }[]
