import { createContext, useEffect, useState } from 'react'
import { useAppSelector, useAppDispatch } from '../hooks/redux'
import { getMoviesThunk } from '../actions/movies'
import { Movie } from '../../common/types'
import SingleMovie from './SingleMovie'
import AddMovie from './AddMovie'
import ReactSwitch from 'react-switch'

export const ThemeContext = createContext<null>(null)

function App() {
  const [theme, setTheme] = useState('dark')
  const toggleTheme = () => {
    setTheme((curr) => (curr === 'light' ? 'dark' : 'light'))
  }

  const [showAdd, setShowAdd] = useState(false)
  const dispatch = useAppDispatch()
  const movieList = useAppSelector((state) => state.movie as Movie[])

  useEffect(() => {
    dispatch(getMoviesThunk())
  }, [dispatch]) // why? -> when the page renders, dispatch isnt a thing then it is defined, and this useEffect is triggered

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="App" id={theme}>
        <h1 className="firstHeading">Movies to watch next</h1>
        <button onClick={() => setShowAdd(!showAdd)}> Add New Movie </button>
        <div className="switch">
          <label> {theme === 'light' ? 'Light Mode' : 'Dark Mode'}</label>
          <ReactSwitch onChange={toggleTheme} checked={theme === 'dark'} />
        </div>
        {showAdd ? (
          <AddMovie />
        ) : (
          <div className="movie-container">
            {movieList.map((movie) => (
              <SingleMovie key={movie.id} movie={movie} />
            ))}
          </div>
        )}
      </div>
    </ThemeContext.Provider>
  )
}

export default App
