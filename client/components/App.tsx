import { useState, useEffect } from 'react'
import { getHamsters } from '../apis/apiClient'
import { Hamsters } from '../../models/hamster'

function App() {
  const [hamsters, setHamsters] = useState([] as Hamsters[])

  useEffect(() => {
    getHamsters()
      .then((data) => {
        setHamsters(data)
      })
      .catch((err) => alert(err.message))
  }, [])

  return (
    <>
      <header className="header">
        <h1>Hamsters:</h1>
      </header>
      <section className="main">
        {
          <ul>
            {hamsters.map((hamster) => (
              <li key={hamster.id}>
                {hamster.name}{' '}
                <img src={`./${hamster.image}`} alt={hamster.name} />
              </li>
            ))}
          </ul>
        }
      </section>
    </>
  )
}

export default App
