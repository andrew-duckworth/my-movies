import { CoffeeData } from '../models/Coffee'

interface Props {
  coffeeProp: CoffeeData
}

export default function singleCoffee(props: Props) {
  const { name, url, selftext } = props.coffeeProp
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
