// import { getMovies } from '../apis/apiClient'
import { useEffect } from 'react'
import { runDeleteMovie, getMoviesThunk } from '../actions/movies'
import { useAppDispatch, useAppSelector } from '../hooks/redux'
import { Movie } from '../models/movies'
// import { useNavigate } from 'react-router-dom'

export function Movies() {
  // const [movies, setMovies] = useState([] as Types.Movie[])
  const movies = useAppSelector((state) => state.moobies as Movie[])
  // const navigate = useNavigate()

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getMoviesThunk())
  }, [dispatch])

  const handleDelete = (id: number) => {
    // Dispatch the delete action to delete the movie from the server-side
    dispatch(runDeleteMovie(id))
      .then(() => {
        // If the delete action is successful, update the state to remove the deleted movie
        // movies(movies.filter((movie) => movie.id !== id))
      })
      .catch((err) => alert(err.message))
  }

  return (
    <>
      <div>
        <h1 className="titles">Moooovies</h1>
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
