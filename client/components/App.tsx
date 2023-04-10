import { useEffect } from 'react'
import { useAppSelector, useAppDispatch } from '../hooks/redux'
import { getMoviesThunk } from '../actions/movies'
import { Movie } from '../../common/types'

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
      <section className="main">
        {movieList.map((movie) => {
          return (
            <div key={movie.id}>
              <h1>{movie.title}</h1>
              <img src={movie.image} alt="" />
              <p>{movie.rating}/10</p>
            </div>
          )
        })}
      </section>
    </>
  )
}

export default App
