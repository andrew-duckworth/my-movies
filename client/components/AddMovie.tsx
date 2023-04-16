import { ChangeEvent, FormEvent, useState } from 'react'
import { useAppDispatch } from '../hooks/redux'
import { ImdbMovie, MovieData } from '../../common/types'
import { searchForMovie } from '../apis/imdb'
import { addMovieThunk } from '../actions/imdb'
import { useNavigate } from 'react-router-dom'
// import { setMoviesThunk } from '../actions/imdb'

function AddMovie() {
  const dispatch = useAppDispatch()
  const [movieSearch, setMovieSearch] = useState('' as string)
  const [imdbResults, setImdbResults] = useState([] as ImdbMovie[])
  const navigate = useNavigate()

  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setMovieSearch(evt.target.value)
  }

  const handleSubmit = (evt: FormEvent) => {
    evt.preventDefault()
    searchForMovie(movieSearch)
      .then((data) => {
        console.log(data)
        console.log(process.env.IMDB_KEY)

        setImdbResults(data)
      })
      .catch((err) => console.log(err.message))
  }

  const handleAdd = async (movie: ImdbMovie) => {
    const formattedMovie: MovieData = {
      imdb_id: movie.id,
      title: movie.title,
      image: movie.image,
      rating: 4,
    }
    try {
      await dispatch(addMovieThunk(formattedMovie))
      window.location.reload()
    } catch (err: any) {
      console.log(err.message)
    }
  }

  return (
    <>
      <p>Add Movie</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
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
          <div key={movie.id} className="movie">
            <h2 className="title">{movie.title}</h2>
            <img src={movie.image} alt={`poster for ${movie.title}`}></img>
            <div>
              <button onClick={() => handleAdd(movie)}>
                Add Movie to database
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default AddMovie
