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
    <section>
      <div className="description">
        <h2>What is a big three?</h2>
        <h3>
          A person&apos;s big three refers to their sun, moon, and rising
          placements in their natal chart. These are general indicators for a
          person&apos;s personality, without tyring to understand their entire
          chart.
        </h3>
      </div>
      <div className="users">
        {user.map((user) => (
          <div className="users__each" key={user.id}>
            <h3>{user.name}</h3>
            <p>Sun: {user.sun}</p>
            <p>Moon: {user.moon}</p>
            <p>Rising: {user.rising}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ChartList
