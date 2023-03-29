import { useAppDispatch, useAppSelector } from '../hooks/redux'
import { useEffect, useState, ChangeEvent, FormEvent } from 'react'
import { fetchMovies } from '../actions/movie'
import { MoviesData } from '../models/Movies'

function Movie() {
  const dispatch = useAppDispatch()
  const movies = useAppSelector((state) => state.eachMovie)

  useEffect(() => {
    dispatch(fetchMovies())
  }, [])

  return (
    <>
      <div className="movies">
        <ul>
          {movies.map((movie) => (
            <li key={movie.id}>
              {movie.title}
              <img src={movie.movieImg} alt={movie.title} />
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default Movie
