import { useAppDispatch, useAppSelector } from '../hooks/redux'
import { useEffect } from 'react'
import { fetchMovies } from '../actions/movie'

function Movie() {
  const dispatch = useAppDispatch()
  const movies = useAppSelector((state) => state.eachMovie)

  useEffect(() => {
    dispatch(fetchMovies())
  }, [dispatch])

  return (
    <>
      <div className="movies">
        <ul>
          {movies.map((movie) => (
            <li key={movie.id}>
              <p>{movie.title}</p>
              <p>Director: {movie.director}</p>
              <img src={movie.movieImg} alt={movie.title} />
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default Movie
