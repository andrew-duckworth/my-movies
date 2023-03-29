import { useEffect, useState } from 'react'
import { getAllCoffee } from '../apiClient'
import * as Types from '../models/Coffee'
import CoffeeSingle from './CoffeeSingle'

function App() {
  const [coffee, setCoffee] = useState([] as Types.CoffeeData[])

  useEffect(() => {
    getAllCoffee()
      .then((coffee) => {
        setCoffee(coffee)
      })
      .catch((err) => alert(err.message))
  })
  
  return (
    <>
      <header className="header">
        <h1>Manual Coffee Brewing Methods</h1>
      </header>
      <section className="main">
        {coffee.map((coffee) => (
          <CoffeeSingle coffeeProp={coffee} key={coffee.id} />
        ))}
      </section>
    </>
  )
}

export default App
