import { CoffeeData } from '../models/Coffee'

interface Props {
  coffeeProp: CoffeeData
}

export default function singleCoffee(props: Props) {
  const { name, url, selftext } = props.coffeeProp
  return (
    <div>
      <img src={url} alt={name} />
      <h2>{name}</h2>
      <p>{selftext}</p>
    </div>
  )
}
