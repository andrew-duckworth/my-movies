import { useAppDispatch } from '../hooks/redux'
import { useState, ChangeEvent, FormEvent } from 'react'
import { updateHamsters } from '../actions/hamsters'

interface Props {
  name: string
  id: number
}

function UpdateHamster(props: Props) {
  const dispatch = useAppDispatch()
  // const hamsters = useAppSelector((state) => state.hamsters)
  const oldHammy = props.name
  const hammyId = props.id
  const [data, setData] = useState(oldHammy)

  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setData(evt.target.value)
  }

  const handleSubmit = (evt: FormEvent) => {
    evt.preventDefault()
    console.log(oldHammy, data, hammyId)
    dispatch(updateHamsters(oldHammy, data))
  }

  return (
    <>
      <div className="hamsters">
        {oldHammy}
        <form>
          <label htmlFor="ChangeName:"> | Change Name:</label>
          <input id="ChangeName" onChange={handleChange} name="name"></input>
          <button onClick={handleSubmit}>Submit</button>
        </form>
      </div>
    </>
  )
}

export default UpdateHamster
