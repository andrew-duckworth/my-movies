import React, { useState } from 'react'
import { Starsign } from '../../common/Starsign'

function SignsList() {
  const [signs, setSigns] = useState([] as Starsign[])

  return (
    <section>
      <h2>Star Signs</h2>
      {signs.map((sign) => (
        <div key={sign.id}>
          <p>{sign.sign}</p>
          <p>Date of Birth: {sign.dates}</p>
          <img src={sign.image} alt="art with cat" />
        </div>
      ))}
    </section>
  )
}
export default SignsList
