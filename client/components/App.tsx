import { useEffect, useState } from 'react'
import { useAppSelector, useAppDispatch } from '../hooks/redux'
import { getMoviesThunk } from '../actions/movies'
import { Movie } from '../../common/types'
import SingleMovie from './SingleMovie'
import AddMovie from './AddMovie'

function App() {
  const [showAdd, setShowAdd] = useState(false)
  const dispatch = useAppDispatch()
  const movieList = useAppSelector((state) => state.movie as Movie[])

  useEffect(() => {
    dispatch(getMoviesThunk())
  }, [dispatch]) // why? -> when the page renders, dispatch isnt a thing then it is defined, and this useEffect is triggered

  return (
    <>
      <section className="main">
        <button onClick={() => setShowAdd(!showAdd)}> Add New Movie </button>
        {showAdd ? (
          <AddMovie />
        ) : (
          <div className="movie-container">
            {movieList.map((movie) => (
              <SingleMovie key={movie.id} movie={movie} />
            ))}
          </div>
        )}
      </section>
    </>
  )
}

export default App
