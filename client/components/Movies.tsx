import { getMovies } from '../apis/apiClient'

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
