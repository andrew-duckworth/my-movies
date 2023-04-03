import { ChangeEvent, FormEvent, useState } from 'react'
import { useAppDispatch } from '../hooks/redux'
import { ImdbMovie } from '../../common/types'
import { searchForMovie } from '../apis/imdb'

function AddMovie() {
  const [movieSearch, setMovieSearch] = useState('')
  const [imdbResults, setImdbResults] = useState([] as ImdbMovie[])

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
    </>
  )
}

export default AddMovie
