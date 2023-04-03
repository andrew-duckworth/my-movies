import { useEffect } from "react"
import { useAppSelector, useAppDispatch } from "../hooks/redux"
import { getMoviesThunk } from "../actions/movies"
import { Movie } from "../../common/types"
import SingleMovie from "./SingleMovie"

function App() {
  const dispatch = useAppDispatch()
  const movieList = useAppSelector(state => state.movie as Movie[])

  useEffect(() => {
    dispatch(getMoviesThunk())
  }, [dispatch]) // why? -> when the page renders, dispatch isnt a thing then it is defined, and this useEffect is triggered

  return (
    <>
      <section className="main">
        <div className="movie-container">
          {movieList.map(movie => (
            <SingleMovie key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </>
  )
}

export default App
