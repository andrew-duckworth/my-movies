import { ChangeEvent, FormEvent, useState } from 'react'
import { useAppDispatch } from '../hooks/redux'
import { ImdbMovie } from '../../common/types'
import { searchForMovie } from '../apis/imdb'
import { setMoviesThunk } from '../actions/imdb'

import {} from '../apis/imdb'

export default function AddMovie() {
  const dispatch = useAppDispatch()
  const [movieSearch, setMovieSearch] = useState('')
  const [imdbbResults, setImdbResults] = useState([] as ImdbMovie[])

  const changeHandler = (e: ChangeEvent<HTMLFormElement>) => {
    setMovieSearch(e.target.value)
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    searchForMovie(movieSearch)
      .then((data) => setImdbResults(data))
      .catch((err) => console.log(err.message))
  }

  return (
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
  )
}
