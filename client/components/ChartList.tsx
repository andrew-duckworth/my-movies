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
            <h2>{user.name}</h2>
            <div className="text-item">
              <h3>Sun: </h3>
              <p>{user.sun}</p>
            </div>
            <div className="text-item">
              <h3>Moon: </h3>
              <p>{user.moon}</p>
            </div>
            <div className="text-item">
              <h3>Rising: </h3>
              <p>{user.rising}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ChartList
