import { Movie } from '../../common/types'
import { useAppSelector } from '../hooks/redux'

import OneMovie from './OneMovie'

export default function MovieList() {
  const movieList = useAppSelector(
    (globalState) => globalState.moviesReducer as Movie[]
  )

  return (
    <>
      <div className="movies">
        {movieList.map((movie) => {
          return <OneMovie key={movie.id} movie={movie} />
        })}
      </div>
    </>
  )
}
