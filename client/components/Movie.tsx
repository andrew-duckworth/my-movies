interface Props {
  title: string
  director: string
  movieImage: string
}

function Movie({ title, director, movieImage }: Props) {
  return (
    <div>
      <img src={movieImage} alt={title} />
      <h1>{title}</h1>
      <h2>{director}</h2>
    </div>
  )
}

export default Movie
