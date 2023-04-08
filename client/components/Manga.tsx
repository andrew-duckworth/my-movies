interface Props {
  key?: number
  title: string
  books: string
  author: string
  location: string
  imageSrc: string
}

function Manga({ key, title, books, author, location, imageSrc }: Props) {
  const url = key ? '/manga/' + key.toString() : '/'
  return (
    <div className="card front">
      <a href={url}>
        <h3>
          {title} - {books}
        </h3>
        <p>Author: {author}</p>
        <p>Collection currently located at: {location}</p>
        <img src={imageSrc} alt="" />
      </a>
    </div>
  )
}

export default Manga
