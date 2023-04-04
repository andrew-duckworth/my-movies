import { useEffect } from 'react'
import { Starsign } from '../../common/Starsign'
import { useAppDispatch, useAppSelector } from '../hooks/redux'
import { getSignsThunk } from '../actions/zodiac'

function SignsList() {
  const dispatch = useAppDispatch()
  const signList = useAppSelector((state) => state.starsigns as Starsign[])

  useEffect(() => {
    dispatch(getSignsThunk())
  }, [dispatch])

  return (
    <section className="signs">
      <br />
      {signList.map((sign) => (
        <div className="signs__each" key={sign.id}>
          <h2>{sign.sign}</h2>
          <p>Date of Birth: {sign.dates}</p>
          <img src={'../../images/' + sign.image} alt="art with cat" />
        </div>
      ))}
    </section>
  )
}
export default SignsList
