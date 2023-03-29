import { useEffect, useState } from 'react'
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
    <section className="signs">
      <br />
      {signs.map((sign) => (
        <div className="signs__each" key={sign.id}>
          <h3>{sign.sign}</h3>
          <p>Date of Birth: {sign.dates}</p>
          <img src={'../../images/' + sign.image} alt="art with cat" />
        </div>
      ))}
    </section>
  )
}
export default SignsList
