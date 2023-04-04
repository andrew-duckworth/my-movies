import { useAppSelector } from '../hooks/redux'
import LoadingScreen from './LoadingScreen'

function BlockImage() {
  const showLoading = useAppSelector((state) => state.blockImage)
  return showLoading ? (
    <>
      <div className="card-front-block">
        <LoadingScreen />
      </div>
    </>
  ) : null
}

export default BlockImage
