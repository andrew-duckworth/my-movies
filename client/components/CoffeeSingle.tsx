import { CoffeeData } from '../models/Coffee'

interface Props {
  coffeeProp: CoffeeData
}

export default function SingleCoffee(props: Props) {
  const { name, url, selftext } = props.coffeeProp
  //cut the words and joining the words => limiting words displaying on screen
  const words = selftext.split(' ')
  const limitedText = words.slice(0, 18).join(' ') + '...' //optinal
  // -------
  return (
    <div className="card-front">
      <img className="img_size" src={url} alt={name} />
      <div className="card-body">
        <div className="card-text-bottom">
          <h2>{name}</h2>
          <p>{selftext}</p>
        </div>
      </div>
    </div>
  )
}
