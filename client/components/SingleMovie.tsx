import { Movie } from '../../common/types'

function SingleMovie({movie}: {movie: Movie}) {
  
  
  return (
    <div className='movie'>
      <h2 className='title'>{movie.title}</h2>
      <img src={movie.image} alt={`poster for ${movie.title}`}></img>
    </div>
    )
  }

  export default SingleMovie