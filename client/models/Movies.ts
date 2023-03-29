export interface MoviesData {
  id: number
  title: string
  director: string
  movieImg: string
}

export type RawMovieDataArr = { data: MoviesData }[]
