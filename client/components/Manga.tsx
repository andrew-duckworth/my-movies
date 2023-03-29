interface Props {
  title: string
  books: string
  author: string
  location: string
  imageSrc: string
}

function Manga({ title, books, author, location, imageSrc }: Props) {
  return (
    <div>
      <h3>
        {title} - {books}
      </h3>
      <p>Author: {author}</p>
      <p>Collection currently located at: {location}</p>
      <img src={imageSrc} alt="" />
    </div>
  )
}

export default Manga
