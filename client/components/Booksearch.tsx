import { ChangeEvent, FormEvent, useState } from 'react'
import { addBookToGlobal, loadingNewBooks } from '../actions/Actions'
import { postBook } from '../apis/booksApi'
import { useAppDispatch, useAppSelector } from '../hooks/redux'

function Booksearch() {
  const [addBook, setAddBook] = useState('')
  const dispatch = useAppDispatch()
  const loadingNewBook = useAppSelector(
    (globalState) => globalState.loadingNewBook
  )

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setAddBook(e.target.value)
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const newBook = addBook
    setAddBook('')
    dispatch(loadingNewBooks())
    return postBook(newBook).then(([addedBook]) => {
      dispatch(addBookToGlobal(addedBook))
    })
  }

  return (
    <>
      {loadingNewBook ? (
        <img
          className="books-loading"
          src="/images/loading.gif"
          alt="loading"
        ></img>
      ) : (
        <form onSubmit={handleSubmit}>
          <h3 className="px-4 pt-6 text-2xl font-bold">Add a Book</h3>
          <div className="p-4 label-input-search">
            <label
              className="text-base font-semibold leading-7 text-gray-900"
              htmlFor="book-search"
            >
              Open Library Search
            </label>
            <input
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              id="book-search"
              name="search"
              value={addBook}
              onChange={handleChange}
            ></input>
          </div>
          <button
            className="search-btn py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
            type="submit"
          >
            Go
          </button>
        </form>
      )}
    </>
  )
}

export default Booksearch
