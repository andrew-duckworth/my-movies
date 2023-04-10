import { getMovies } from '../apis/apiClient'
import { useEffect, useState } from 'react'
import { runDeleteMovie } from '../actions/movies'
import * as Types from '../models/movies'
import { useAppDispatch, useAppSelector } from '../hooks/redux'
// import { useNavigate } from 'react-router-dom'

export function Movies() {
  const [movies, setMovies] = useState([] as Types.Movie[])
  // const navigate = useNavigate()
  const dispatch = useAppDispatch()

  useEffect(() => {
    getMovies()
      .then((all) => setMovies(all))
      .catch((err) => alert(err.message))
  }, [])

  const handleDelete = (id: number) => {
    // Dispatch the delete action to delete the movie from the server-side
    dispatch(runDeleteMovie(id))
      .then(() => {
        // If the delete action is successful, update the state to remove the deleted movie
        setMovies(movies.filter((movie) => movie.id !== id))
      })
      .catch((err) => alert(err.message))
  }

  return (
    <>
      <div>
        <h1>Moooovies</h1>
        <div className="poster-img">
          {movies.map((movie) => (
            <div className="movie-card" key={movie.id}>
              <img
                className="poster"
                src={`${movie.cover}`}
                alt={movie.title}
              />
              <div className="movie-details">
                <h2>{movie.title}</h2>
                <p>{movie.director}</p>
                <button
                  className="delete-btn"
                  onClick={() => handleDelete(movie.id)}
                >
                  X
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
