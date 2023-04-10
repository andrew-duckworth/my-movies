import { toggleEdit } from '../actions/manga'
import { useAppDispatch } from '../hooks/redux'
import toggleEditReducer from '../reducers/toggleEdit'

interface Props {
  id: number
  title: string
  books: string
  author: string
  location: string
  imageSrc: string
}

function Manga({ id, title, books, author, location, imageSrc }: Props) {
  const dispatch = useAppDispatch()
  const handleClick = () => {
    dispatch(toggleEdit(String(id)))
  }
  return (
    <>
      <h2>
        {title} - {books}
      </h2>
      <p>Author: {author}</p>
      <p>Collection currently located at: {location}</p>
      <img className="img-circle" src={imageSrc} alt="" />
      <button onClick={handleClick}>Edit</button>
    </>
  )
}

export default Manga
