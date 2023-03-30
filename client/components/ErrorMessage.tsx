import { useAppSelector } from '../hooks/redux'

function ErrorMessage() {
  const errorMessage = useAppSelector((state) => state.errorMessage)

  return <div className="error">{errorMessage}</div>
}

export default ErrorMessage
