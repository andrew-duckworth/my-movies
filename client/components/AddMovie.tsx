import { ChangeEvent, FormEvent, useState } from 'react'
import { ImdbMovie, MovieData } from '../../common/types'
import { searchForMovie } from '../apis/imdb'
import { useAppDispatch } from '../hooks/redux'
import { addMovieThunk } from '../actions/imdb'
import { useNavigate } from 'react-router-dom'

function AddMovie() {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const [movieSearch, setMovieSearch] = useState('' as string)
  const [imdbResults, setImdbResults] = useState([] as ImdbMovie[])

  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setMovieSearch(evt.target.value)
  }

  const handleSubmit = (evt: FormEvent) => {
    evt.preventDefault()
    searchForMovie(movieSearch)
      .then((data) => {
        setImdbResults(data)
      })
      .catch(err => console.log(err.message))
  }


  const handleAdd = (movie: ImdbMovie) => {
    const formattedMovie: MovieData = {
      imdb_id: movie.id,
      title: movie.title,
      image: movie.image,
      rating: 4
    }
    dispatch(addMovieThunk(formattedMovie))
    navigate('/')
  }

  return (
    <>
      <p>Add a new movie</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor='title'>Title</label>
        <input 
          type='text' 
          name='title' 
          id='title' 
          value={movieSearch} 
          onChange={handleChange} />
        <input type='submit'/>
      </form>

      <div className='movie-container'>
        {imdbResults.map((movie) => (
            <div key={movie.id} className='movie'>
              <h2 className='title'>{movie.title}</h2>
              <img src={movie.image} alt={`poster for ${movie.title}`}></img>
              <hr />
              <div className='center-button'>
                <button className='button' onClick={() => handleAdd(movie)}>Add Movie to database</button>
              </div>
            </div>
        ))}
      </div>
    </>
  )
}

export default AddMovie