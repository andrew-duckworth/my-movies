import { ChangeEvent, FormEvent, useState } from 'react'
import { useAppDispatch } from '../hooks/redux'
import { ImdbMovie, Movie } from '../../common/types'
import { searchForMovie } from '../apis/imdb'
import { addMovieThunk } from '../actions/imdb'

function AddMovie() {
  const [movieSearch, setMovieSearch] = useState('')
  const [imdbResults, setImdbResults] = useState([] as ImdbMovie[])
  const dispatch = useAppDispatch

  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setMovieSearch(evt.target.value)
  }

  const handleSubmit = (evt: FormEvent) => {
    evt.preventDefault()
    searchForMovie(movieSearch)
      .then((data) => {
        console.log(data)
        setImdbResults(data)
      })
      .catch((err) => console.log(err.message))
  }

  const handleAdd = (movie: ImdbMovie) => {
    const formattedMovie = {
      id: movie.id,
      title: movie.title,
      image: movie.image,
    }
    dispatch(addMovieThunk(formattedMovie))
  }

  return (
    <>
      <p>AddMovie Component</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title: </label>
        <input
          type="text"
          name="title"
          id="title"
          value={movieSearch}
          onChange={handleChange}
        />
        <input type="submit" />
      </form>

      <div className="movie-container">
        {imdbResults.map((movie) => (
          <>
            <div key={movie.id} className="movie">
              <h2 className="title">{movie.title}</h2>
              <img src={movie.image} alt={`poster for ${movie.title}`}></img>
            </div>
            <button onClick={() => handleAdd(movie)}>
              Add Movie to Database
            </button>
          </>
        ))}
      </div>
    </>
  )
}

export default AddMovie
