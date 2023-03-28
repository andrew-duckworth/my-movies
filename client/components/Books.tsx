import { useAppDispatch, useAppSelector } from '../hooks/redux'

function Books() {
  const books = useAppSelector((globalState) => globalState.books)
  const dispatch = useAppDispatch()

  return (
    <>
      <h2>Books</h2>
      <div className="books-cont">
        {books.map((book) => (
          <div key={book.id} className="book-cont">
            <h3>{book.title}</h3>
          </div>
        ))}
      </div>
    </>
  )
}

export default Books
