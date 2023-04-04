import { Route, Routes, Link } from 'react-router-dom'

import { useEffect } from "react"
import { useAppDispatch } from "../hooks/redux"
import { getMoviesThunk } from "../actions/movies"
import AddMovie from "./AddMovie"
import MovieList from './MovieList'

function App() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getMoviesThunk())
  }, [dispatch])

  return (
    <>
      <section className="main">
        <h1>Joshs Movies</h1>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/add'>Add Movie</Link></li>
        </ul>
        
        <Routes> 
          <Route path='/' element={<MovieList />} />
          <Route path='/add' element={<AddMovie />} />
        </Routes>
      </section>
    </>
  )
}

export default App
