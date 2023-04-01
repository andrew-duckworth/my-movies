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
      el.currentTarget.src =
        'https://savanisbookshop.com/uploads/image/savanisbookshop.jpeg'
    }
  }

  function delHandler(id: number) {
    dispatch(deleteBook(id))
  }

  return (
    <>
      <h2>Books</h2>
      <div className="books-cont grid-cols-2 place-content-center gap-8">
        {books ? (
          books.map((book: Book) => (
            <div key={book.id} className="book-cont max-w-sm rounded overflow-hidden shadow-lg">
                <div className="px-6 py-4">
              <h3 className='font-bold text-xl mb-2 book-topline book-title'>{book.title}</h3>
              <button
                className="book-delbtn book-topline w-8 h-8 rounded-full 
                bg-red-500 hover:bg-red-600 text-white"
                onClick={() => delHandler(book.id)}
                >X
                </button>
              <p className="text-gray-700 text-base book-subtitle, book-authorname">
                {book.author_name}
              </p>
              </div>
              <img
                className="w-full book-subtitle, book-coverimage"
                src={book.cover_image}
                onLoad={usePlaceholder}
                alt="Book cover"
              ></img>
              <p className="text-gray-900 leading-5 book-subtitle, book-publishdate text-sm">
                {book.publish_date}
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
