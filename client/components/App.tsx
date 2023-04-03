import { useEffect } from "react"
import { useAppSelector, useAppDispatch } from "../hooks/redux"
import { getMoviesThunk } from "../actions/movies"
import { Movie } from "../../common/types"

function App() {
  const dispatch = useAppDispatch()
  const movieList = useAppSelector(state => state.movie as Movie[])
  console.log(movieList);
  

  useEffect(() => {
    dispatch(getMoviesThunk())
  }, [dispatch]) // why?

  return (
    <>
      <div>
        {movieList.map(movie => (
          <div key={movie.id}>
            <h1>{movie.title}</h1>
          </div>
        ))}
      </div>
      <section className="main">{/* add your code here */}</section>
    </>
  )
}

export default App
