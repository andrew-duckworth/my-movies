import React, { useEffect, useState } from 'react'
import { Starsign } from '../../common/Starsign'
import { grabSigns } from '../apis/starsigns'

function SignsList() {
  const [signs, setSigns] = useState([] as Starsign[])

  useEffect(() => {
    grabSigns()
      .then((thing) => {
        setSigns(thing)
      })
      .catch((err) => alert(err.message))
  })

  return (
    <section>
      <h2>Star Signs</h2>
      {signs.map((sign) => (
        <div key={sign.id}>
          <p>{sign.sign}</p>
          <p>Date of Birth: {sign.dates}</p>
          {/* <img src={sign.image} alt="art with cat" /> */}
          <img src={'../../images/' + sign.image} alt="art with cat" />
        </div>
      ))}
    </section>
  )
}
export default SignsList
