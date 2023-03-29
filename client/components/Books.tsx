import { useEffect } from 'react'
import { displayBooks } from '../actions/bookAction'
import { useAppDispatch, useAppSelector } from '../hooks/redux'

function Books() {
  const books = useAppSelector((globalState) => globalState.books)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(displayBooks())
  }, [dispatch])

  return (
    <>
      <h2>Books</h2>
      <div className="books-cont">
        {books.map((book) => (
          <div key={book.id} className="book-cont">
            <h3>{book.title}</h3>
            <p className="book-subtitle, book-authorname">{book.author_name}</p>
            <p className="book-subtitle, book-publishdate">
              {book.publish_date}
            </p>
            <img
              className="book-subtitle, book-coverimage"
              src={
                book.cover_image
                  ? book.cover_image
                  : 'https://savanisbookshop.com/uploads/image/savanisbookshop.jpeg'
              }
              alt="Book cover"
            ></img>
          </div>
        ))}
      </div>
    </>
  )
}

export default Books
