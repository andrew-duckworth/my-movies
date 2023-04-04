import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks/redux'
import { fetchSetCoffee } from '../actions/getCoffee'
import SingleCoffee from './CoffeeSingle'
import AddMethodForm from './FormCoffee'
import LoadingScreen from './LoadingScreen'
import FooterBar from './Footer'

export default function AllCoffee() {
  const dispatch = useAppDispatch()
  const coffees = useAppSelector((state) => state.coffeeReducer)

  useEffect(() => {
    dispatch(fetchSetCoffee())
  }, [])

  return (
    <section className="container">
      <div className="form-wrapper">
        <AddMethodForm />
      </div>
      <div className="card-list">
        {coffees
          .slice()
          .reverse()
          .map((coffee) => (
            <SingleCoffee coffeeProp={coffee} key={coffee.id} />
          ))}
        <FooterBar />
      </div>
      <LoadingScreen />
    </section>
  )
}
