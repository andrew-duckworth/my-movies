import { ChangeEvent, FormEvent, useState } from 'react'
import { ImdbMovie } from '../../common/types'
import { searchForMovie } from '../apis/imdb'

function AddMovie() {
  const [movieSearch, setMovieSearch] = useState('' as string)
  const [imdbResults, setImdbResults] = useState([] as ImdbMovie[])

  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setMovieSearch(evt.target.value)
  }

  const handleSubmit = (evt: FormEvent) => {
    evt.preventDefault()
    searchForMovie(movieSearch)
      .then((data) => {
        console.log('imdb data array: ', data)
        setImdbResults(data)
      })
      .catch(err => console.log(err.message))
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
        <input type='submit' />
      </form>

      <div className='movie-container'>
        {imdbResults.map((movie) => (
          <>
            <div key={movie.id} className='movie'>
              <h2 className='title'>{movie.title}</h2>
              <img src={movie.image} alt={`poster for ${movie.title}`}></img>
            </div>
          </>
        ))}
      </div>
    </>
  )
}

export default AddMovie