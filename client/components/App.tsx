import { useEffect } from 'react'
import { getMoviesThunk } from '../actions/movies'
import { useAppSelector, useAppDispatch } from '../hooks/redux'

import { Movie } from '../../common/types'
import { move } from 'superagent'
import moviesReducer from '../reducers/movies'
import AddMovie from './AddMovie'
import { SingleMovie } from './SingleMovie'

function App() {
  const dispatch = useAppDispatch()

  const movieList = useAppSelector((state) => state.moves as Movie[])

  useEffect(() => {
    dispatch(getMoviesThunk())
  }, [dispatch])

  return (
    <>
      <header className="header">
        <h1>My Collection</h1>
      </header>
      <AddMovie />
      {movieList.map((movie) => (
        // <div key={movie.title}>
        //   <p>{movie.title}</p>
        //   <img src={movie.image} alt={movie.title} />
        // </div>
        <SingleMovie key={movie.id} movie={movie} />
      ))}
      <section className="main">{/* add your code here */}</section>
    </>
  )
}

export default App
