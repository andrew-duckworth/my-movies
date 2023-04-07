import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks/redux'
import { fetchSetCoffee } from '../actions/getCoffee'
import SingleCoffee from './CoffeeSingle'
import AddMethodForm from './FormCoffee'
import LoadingScreen from './LoadingScreen'
import FooterBar from './Footer'
import UpdateForm from './FormUpdate'

export default function AllCoffee() {
  const dispatch = useAppDispatch()
  const coffees = useAppSelector((state) => state.coffeeReducer)
  const [toggle, setToggle] = useState(false)

  const handleClose = () => {
    setToggle(false)
  }

  useEffect(() => {
    dispatch(fetchSetCoffee())
  }, [dispatch])

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
            <div key={coffee.id}>
              <SingleCoffee coffeeProp={coffee} />
            </div>
          ))}
        <FooterBar />
      </div>
      <LoadingScreen />
    </section>
  )
}
