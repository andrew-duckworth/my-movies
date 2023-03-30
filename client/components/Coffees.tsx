import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks/redux'
import { fetchCoffee } from '../actions/getCoffee'
import SingleCoffee from './CoffeeSingle'

export default function AllCoffee() {
  const dispatch = useAppDispatch()
  const coffees = useAppSelector((state) => state.coffeeReducer)

  useEffect(() => {
    dispatch(fetchCoffee())
  })

  return (
    <section className="manual-brew">
      <div className="card-list">
        {coffees.map((coffees) => (
          <SingleCoffee coffeeProp={coffees} key={coffees.id} />
        ))}
      </div>
    </section>
  )
}
