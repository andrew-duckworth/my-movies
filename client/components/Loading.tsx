import { useAppSelector } from '../hooks/redux'

function Loading() {
  const loading = useAppSelector((globalState) => globalState.loading)

  return (
    <>
      {loading ? (
        <img
          className="books-loading"
          src="/images/loading.gif"
          alt="loading"
        ></img>
      ) : (
        ''
      )}
    </>
  )
}

export default Loading
