import { useEffect } from 'react'
import { Game } from '../../common/interfaces'
import { displayGames, deleteGame } from '../actions/Actions'
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

 

  function delHandler(id: number) {
    dispatch(deleteBook(id))
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
                alt="Book cover"
              ></img>
              <button
                className="book-delbtn"
                onClick={() => delHandler(book.id)}
              >
                X
              </button>
            </div>
          ))
        ) : (
          <p>NO BOOKS! PANIC!!!</p>
        )}
      </div>
    </>
  )
}

export default Books
