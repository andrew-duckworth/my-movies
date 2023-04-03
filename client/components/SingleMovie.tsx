import { Movie } from '../../common/types'

// interface Props {
//   movie: Movie
// }

// function SingleMovie(movie: Props) {
//   const oneMovie = movie.movie
//   console.log(oneMovie);
function SingleMovie({movie}: {movie: Movie}) {
  
  
  return (
    <div className='movie'>
      <h2 className='title'>{movie.title}</h2>
      <img src={movie.image} alt={`poster for ${movie.title}`}></img>
    </div>
    )
  }

  export default SingleMovie