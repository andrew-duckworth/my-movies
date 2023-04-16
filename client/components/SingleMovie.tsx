import { Movie } from '../../common/types'
import { useAppDispatch } from '../hooks/redux'
import { deleteMovieThunk } from '../actions/imdb'
import { useNavigate } from 'react-router-dom'
// interface Props {
//   movie: Movie
// }

// function SingleMovie(movie: Props) {
//   const oneMovie = movie.movie
//   console.log(oneMovie);

function SingleMovie({ movie }: { movie: Movie }) {
  const navigate = useNavigate()

  const dispatch = useAppDispatch()
  const handleDelete = async (id: number) => {
    try {
      await dispatch(deleteMovieThunk(id))
      navigate('/')
    } catch (err: any) {
      console.log(err.message)
    }
  }

  return (
    <div className="movie">
      <h2 className="title">{movie.title}</h2>
      <img src={movie.image} alt={`poster for ${movie.title}`}></img>
      <div>
        <button onClick={() => handleDelete(movie.id)}>Delete movie</button>
      </div>
    </div>
  )
}

export default SingleMovie
