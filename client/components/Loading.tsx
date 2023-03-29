import { useAppSelector } from '../hooks/redux'

function Loading() {
  const loading = useAppSelector((globalState) => globalState.loading)

  return (
    <>{loading ? <img src="/images/loading.gif" alt="loading"></img> : ''}</>
  )
}

export default Loading
