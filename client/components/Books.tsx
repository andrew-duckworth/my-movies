import { SyntheticEvent, useEffect } from 'react'
import { Book } from '../../common/interfaces'
import { displayBooks, deleteBook } from '../actions/Actions'
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
      el.currentTarget.src = 'images/book-placeholder.png'
    }
  }

  function delHandler(id: number) {
    dispatch(deleteBook(id))
  }

  return (
    <>
      <h2 className="text-4xl font-bold">Books</h2>
      <div className="books-cont grid-cols-2 place-content-center gap-8 border-b-4 pb-5">
        {books ? (
          books.map((book: Book) => (
            <div
              key={book.id}
              className="book-cont grid-cols-2 place-content-center max-w-m rounded overflow-hidden shadow-lg"
            >
              <div className="px-6 py-4">
                <div className="book-topline">
                  <h3 className="font-bold book-topline text-xl mb-2 book-title">
                    {book.title}
                  </h3>
                  <button
                    className="book-topline book-delbtn w-8 h-8 rounded-full hover:bg-red-800 text-white"
                    onClick={() => delHandler(book.id)}
                  >
                    X
                  </button>
                </div>
                <p className="text-gray-700 text-base book-subtitle, book-authorname">
                  {book.author_name}
                </p>
              </div>
              <img
                className="w-full book-subtitle, book-coverimage"
                src={book.cover_image}
                onLoad={usePlaceholder}
                alt={`${book.title} cover`}
              ></img>
              <p className="px-6 text-gray-900 leading-5 book-subtitle, book-publishdate text-sm">
                Published: {book.publish_date}
              </p>
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
