interface Props {
  title: string
  books: string
  author: string
  location: string
  imageSrc: string
}

function Manga({ title, books, author, location, imageSrc }: Props) {
  return (
    <a href="/">
      <h2>
        {title} - {books}
      </h2>
      <p>Author: {author}</p>
      <p>Collection currently located at: {location}</p>
      <img className="img-circle" src={imageSrc} alt="" />
    </a>
  )
}

export default Manga
