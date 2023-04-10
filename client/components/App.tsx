import { useState } from 'react'
import { Hamsters } from '../../models/hamster'
import HamsterList from './HamstersList'

function App() {
  // const [hamsters, setHamsters] = useState([] as Hamsters[])

  // useEffect(() => {
  //   getHamsters()
  //     .then((data) => {
  //       setHamsters(data)
  //     })
  //     .catch((err) => alert(err.message))
  // }, [])

  return (
    <>
      <header className="header">
        <h1>Hamsters:</h1>
      </header>
      <section className="main">
        <HamsterList />
      </section>
    </>
  )
}

// {
//   <ul>
//     {hamsters.map((hamster) => (
//       <li key={hamster.id}>
//         {hamster.name}{' '}
//         <img src={`./${hamster.image}`} alt={hamster.name} />
//       </li>
//     ))}
//   </ul>
// }
export default App
