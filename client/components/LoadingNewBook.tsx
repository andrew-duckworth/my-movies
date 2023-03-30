import { useAppSelector } from '../hooks/redux'

function LoadingNewBook() {
  const loadingNewBook = useAppSelector(
    (globalState) => globalState.loadingNewBook
  )

  return (
    <>
      {loadingNewBook ? (
        <img
          className="book-loading"
          src="/images/loading.gif"
          alt="loading"
        ></img>
      ) : (
        ''
      )}
    </>
  )
}

export default LoadingNewBook
