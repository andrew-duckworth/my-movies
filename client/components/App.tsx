import { useEffect } from 'react'
import { useAppSelector, useAppDispatch } from '../hooks/redux'
import { getMoviesThunk } from '../actions/movies'
import { Movie } from '../../common/types'

function App() {
  const dispatch = useAppDispatch()
  const movieList = useAppSelector((state) => state.movies as Movie[])

  useEffect(() => {
    dispatch(getMoviesThunk())
  }, [dispatch])

  return (
    <>
      <header className="header">
        <h1>My Collection</h1>
      </header>
      <section className="main">
        <div>
          {movieList.map((movie) => (
            <h2 key={movie.id}>{movie.title}</h2>
          ))}
        </div>
      </section>
    </>
  )
}

export default App
