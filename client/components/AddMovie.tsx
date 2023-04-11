import { ChangeEvent, FormEvent, useState } from 'react'
import { Data, Imdb, Movie } from '../../common/types'
import { searchMoviesAPI } from '../apis/imdb'
import { useAppDispatch } from '../hooks/redux'
import { useNavigate } from 'react-router-dom'

interface Form {
  title: string
  year: string
}

export default function AddMovie() {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const [movieSearch, setMovieSearch] = useState({
    title: '',
    year: '',
  } as Form)
  const [movieResult, setMovieResult] = useState([] as Imdb[])

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setMovieSearch({
      ...movieSearch,
      [e.target.id]: e.target.value,
    })
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    const search = `${movieSearch.title} ${movieSearch.year}`

    searchMoviesAPI(search)
      .then((data) => {
        setMovieResult(data)
      })
      .catch((err) => console.log('AddMovie Err: ', err.message))
  }

  const handleAdd = (movie: Imdb) => {
    const formattedMovie: Data = {
      imdb_id: movie.id,
      title: movie.title,
      image: movie.image,
      rating: 5,
    }
    dispatch(addMovieThunk(formattedMovie))
    navigate('/')
  }

  return (
    <>
      <h2>Add Movie</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          name="title"
          id="title"
          value={movieSearch.title}
          onChange={handleChange}
          required
        />
        <label htmlFor="year">Year:</label>
        <input
          type="number"
          min="1880"
          max="2099"
          pattern="[0-9]+"
          name="year"
          id="year"
          value={movieSearch.year}
          onChange={handleChange}
        />
        <input type="submit" />
      </form>
      <div className="movie__results">
        {movieResult.map((movie) => (
          <>
            <div key={movie.id}>
              <h2 className="movie__title">{movie.title}</h2>
              <p>{movie.description}</p>
              <img
                src={movie.image}
                alt={`poster for the incredible ${movie.title}`}
              />
              <button className="add-movie" onClick={() => handleAdd(movie)}>
                Add Movie
              </button>
            </div>
          </>
        ))}
      </div>
    </>
  )
}
