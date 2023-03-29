import { useAppSelector } from '../hooks/redux'

export default function ErrorMessage() {
  const message = useAppSelector((state) => state.error)

  return (
    <>{message && <p className="error">{`An error occured: ${message}`}</p>}</>
  )
}
