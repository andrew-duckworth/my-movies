import { useEffect, useState } from 'react'
import { BigThree } from '../../common/Starsign'
import { grabUsers } from '../apis/starsigns'

function ChartList() {
  const [user, setUser] = useState([] as BigThree[])

  useEffect(() => {
    grabUsers()
      .then((thing) => {
        setUser(thing)
      })
      .catch((err) => alert(err.message))
  })

  return (
    <section className="signs">
      <br />
      {user.map((user) => (
        <div className="signs__each" key={user.id}>
          <h3>{user.name}</h3>
          <p>{user.sun}</p>
          <p>{user.moon}</p>
          <p>{user.rising}</p>
        </div>
      ))}
    </section>
  )
}

export default ChartList
