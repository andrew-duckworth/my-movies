import { Movie } from '../../common/types'

export function SingleMovie({ movie }: { movie: Movie }) {
  return (
    <div key={movie.title} className="movie-container">
      <h2>{movie.title}</h2>
      <p>Rating: {movie.rating}</p>
      <img src={movie.image} alt={movie.title} />
    </div>
  )
}
