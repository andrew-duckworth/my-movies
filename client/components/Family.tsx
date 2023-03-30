import { useState, useEffect } from 'react'
import { fetchTheFamily } from '../apis/apiClient'
import { Family } from '../../server/common/allModels'
import AddAMember from './AddAMember'
import { useAppDispatch, useAppSelector } from '../hooks/redux'
import { delFamMember } from '../../server/db/data/familyDb'

function showAllFamily() {
  const [relation, showRelations] = useState([] as Family[])

  const dispatch = useAppDispatch()

  // FOR WHEN USING REDUCER....
  // const allFamily = useAppSelector((state) => state.something)
  // console.log(allFamily)

  useEffect(() => {
    // on load
    dispatch(refreshFamily)
  }, [dispatch])

  const refreshFamily = () => {
    fetchTheFamily()
      .then((memberArr) => {
        showRelations(memberArr)
      })
      .catch((err) => alert(err.message))
  }

  const handleDel = (id: number) => {
    dispatch(delFamMember(id))
  }

  return (
    <>
      <div>
        <h2>The Knudsen Family</h2>
        {relation.map((member) => (
          <p key={member.id}>
            Name: {member.name}
            <br></br>
            Nicknames: {member.nicknames}
            <br></br>
            Position in the family: {member.position}
            <br></br>
            Images: {member.image}
            <br></br>
            <button onClick={() => handleDel(member)}>Delete</button>
          </p>
        ))}
        {<AddAMember />}
      </div>
    </>
  )
}

export default showAllFamily
