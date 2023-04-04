import { getMovies, delMovie } from '../apis/apiClient'
import { useEffect, useState } from 'react'
import * as Types from '../models/movies'

export function Movies() {
  // function gotMovies() {
  const [movies, setMovies] = useState([] as Types.Movie[])

  // const [formdata, setFormData] = useState([] as Models.Widget[])

  useEffect(() => {
    getMovies()
      .then((all) => setMovies(all))
      .catch((err) => alert(err.message))
  }, [])

  const handleContextMenu = (id, event) => {
    // dont know why these are angry but it works :)
    event.preventDefault()
    delMovie(id)
    // const id = event.target.getAttribute('movieId')
    console.log('You have right-clicked! on!', id)
  }

  return (
    <>
      <div>
        <h1>Moooovies</h1>
        {/* <button onClick={refreshAll}>Get All Widgets</button> */}
        {/* <button onClick={handleAdd}>add Widget</button> */}
        <div className="poster-img">
          {movies.map((movie) => (
            <>
              <img
                className="poster"
                src={`${movie.cover}`}
                alt={movie.title}
                onContextMenu={(event) => handleContextMenu(movie.id, event)}
              />

              {/* <p className="title" key={movie.id}>
                {movie.title} | | {movie.director}
              </p> */}
            </>
          ))}
        </div>
      </div>
    </>
  )
  // }
}
