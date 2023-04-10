import { Movie } from '../../common/types'

export default function OneMovie({ movie }: { movie: Movie }) {
  return (
    <>
      <div className="movie">
        <h2>{movie.title}</h2>
        <img src={movie.image} alt={`poster for ${movie.title}`} />
        <p>Rating: {movie.rating}/10</p>
      </div>
    </>
  )
}
