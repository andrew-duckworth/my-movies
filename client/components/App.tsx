import { useEffect } from 'react'
import { useAppSelector, useAppDispatch } from '../hooks/redux'
import { getMoviesThunk } from '../actions/movies'
import { Movie } from '../../common/types'
import OneMovie from './OneMovie'

function App() {
  const dispatch = useAppDispatch()

  const movieList = useAppSelector(
    (globalStore) => globalStore.moviesReducer as Movie[]
  )

  useEffect(() => {
    dispatch(getMoviesThunk())
  }, [dispatch])

  return (
    <>
      <header className="header">
        <h1>My Movie Fullstack</h1>
      </header>
      <div className="movies">
        {movieList.map((movie) => {
          return <OneMovie key={movie.id} movie={movie} />
        })}
      </div>
    </>
  )
}

export default App
