import { useAppDispatch } from '../hooks/redux'
import { useState, ChangeEvent, FormEvent, useEffect } from 'react'
import { updateHamsters, runUpdateHamsters } from '../actions/hamsters'
import updateHammies from '../apis/updHammies'

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
    console.log('old:', oldHammy, 'new:', data, 'id:', hammyId)
    // dispatch(updateHamsters(oldHammy, data))
    // updateHammies(hammyId, data)
    dispatch(runUpdateHamsters(oldHammy, data, hammyId))
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
