import { Show } from '../../common/show'

interface Props {
  oneShow: Show
}

function OneShow(props: Props) {
  return (
    <div>
      <h3>{props.oneShow.name}</h3>
      <ul>
        <li>{props.oneShow.genres}</li>
        <li>{props.oneShow.description}</li>
        <li>{props.oneShow.tracklist}</li>
      </ul>
    </div>
  )
}

export default OneShow
