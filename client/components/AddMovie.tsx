import { ChangeEvent, FormEvent, useState } from 'react'
import { useAppDispatch } from '../hooks/redux'
import { ImdbMovie } from '../../common/types'
import { searchForMovie } from '../apis/imdb'
import { addMovieThunk, setMoviesThunk } from '../actions/imdb'

import {} from '../apis/imdb'

export default function AddMovie() {
  const dispatch = useAppDispatch()
  const [movieSearch, setMovieSearch] = useState('')
  const [imdbResults, setImdbResults] = useState([] as ImdbMovie[])

  const changeHandler = (e: ChangeEvent<HTMLFormElement>) => {
    setMovieSearch(e.target.value)
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    searchForMovie(movieSearch)
      .then((data) => setImdbResults(data))
      .catch((err) => console.log(err.message))
  }

  const handleAdd = (movie: ImdbMovie) => {
    alert('your mum hahahaha')
    const formattedMovie = {
      imdbId: movie.id,
      title: movie.title,
      image: movie.image,
      rating: 4,
    }
    dispatch(addMovieThunk(formattedMovie))
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">title: </label>
        <input
          type="text"
          id="title"
          name="title"
          value={movieSearch}
          onChange={changeHandler}
        />
        <button>lol</button>
      </form>
      <div className="movie-container">
        {imdbResults.map((movie) => (
          <>
            <div key={movie.id} className="movie">
              <h2 className="title">{movie.title}</h2>
              <img src={movie.image} alt={`poster for ${movie.title}`}></img>
              <button onClick={() => handleAdd(movie)}>
                Add Movie to database
              </button>
            </div>
          </>
        ))}
      </div>
    </>
  )
}
