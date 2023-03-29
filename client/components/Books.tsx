import { SyntheticEvent, useEffect } from 'react'
import { Book } from '../../common/interfaces'
import { displayBooks } from '../actions/bookAction'
import { useAppDispatch, useAppSelector } from '../hooks/redux'

function Books() {
  const books = useAppSelector((globalState) => globalState.books)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(displayBooks())
    // get element by class
    // loop over images with a conditional checking naturalWidth
    // if it is 1, replace with placeholder image
  }, [dispatch])

  function usePlaceholder(el: SyntheticEvent<HTMLImageElement>) {
    if (el.currentTarget.naturalWidth < 2) {
      el.currentTarget.src =
        'https://savanisbookshop.com/uploads/image/savanisbookshop.jpeg'
    }
  }

  return (
    <>
      <h2>Books</h2>
      <div className="books-cont">
        {books ? (
          books.map((book: Book) => (
            <div key={book.id} className="book-cont">
              <h3>{book.title}</h3>
              <p className="book-subtitle, book-authorname">
                {book.author_name}
              </p>
              <p className="book-subtitle, book-publishdate">
                {book.publish_date}
              </p>
              <img
                className="book-subtitle, book-coverimage"
                src={book.cover_image}
                onLoad={usePlaceholder}
                alt="Book cover"
              ></img>
            </div>
          ))
        ) : (
          <p>NO BOOKS</p>
        )}
      </div>
    </>
  )
}

export default Books
