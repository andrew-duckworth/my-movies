import { useState, useEffect } from 'react'
import fetchTheFamily from '../apis/apiClient'
import { Family } from '../../server/common/allModels'
import { useAppSelector } from '../hooks/redux'
import { isMemberName } from 'typescript'

function showAllFamily() {
  const [relation, showRelations] = useState([] as Family[])

  useEffect(() => {
    // on load
    refreshFamily()
  }, [])

  const refreshFamily = () => {
    fetchTheFamily()
      .then((memberArr) => {
        showRelations(memberArr)
      })
      .catch((err) => alert(err.message))
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
          </p>
        ))}
      </div>
    </>
  )
}

export default showAllFamily
