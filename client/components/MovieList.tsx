import { Movie } from '../../common/types'
import { useAppSelector } from '../hooks/redux'

import SingleMovie from './SingleMovie'

function MovieList() {
  const movieList = useAppSelector((state) => state.movie as Movie[])

  return (
    <>
      <div className="movie-container">
        {movieList.map((movie) => (
          <SingleMovie key={movie.id} movie={movie} />
        ))}
      </div>
    </>
  )
}

export default MovieList
