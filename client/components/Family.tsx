import { fetchAllData } from '../actions/familyActions'
import { useAppDispatch, useAppSelector } from '../hooks/redux'
import { deleteOneMember } from '../actions/familyActions'
import { useEffect } from 'react'
//IMPORTING ADD MEMBER COMPONENT INSTEAD OF TO APP
import AddAMember from './AddAMember'

function showAllFamily() {
  // note: family (globalState.family) comes from the index.ts main reducer file.
  const knudsen = useAppSelector((globalState) => globalState.family)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchAllData())
  }, [dispatch])

  const handleDel = (id: number) => {
    dispatch(deleteOneMember(id))
  }

  const handleView = (id: number) => {}

  return (
    <>
      <div>
        <h2>The Knudsen Family</h2>
        {knudsen.map((member) => (
          <p key={member.id}>
            Name: {member.name}
            <br></br>
            Nicknames: {member.nicknames}
            <br></br>
            Position in the family: {member.position}
            <br></br>
            Images: {member.image}
            <br></br>
            <button onClick={() => handleView(member.id)}>View</button>
            <button onClick={() => handleDel(member.id)}>Delete</button>
          </p>
        ))}
        {<AddAMember />}
      </div>
    </>
  )
}

export default showAllFamily

// FOR WHEN USING REDUCER....
// const allFamily = useAppSelector((state) => state.something)
// console.log(allFamily)

// useEffect(() => {
//   // on load
//   dispatch(refreshFamily)
// }, [dispatch])

// const refreshFamily = () => {
//   requestFamily()
//     .then((memberArr) => {
//       receiveFamily(memberArr)
//     })
//     .catch((err) => alert(err.message))
// }

// FOR WHEN USING REDUCER....
// const allFamily = useAppSelector((state) => state.something)
// console.log(allFamily)

//FOR WHEN NOT USING REDUX AND USING USESTATE INSTEAD.
// import { useState, useEffect } from 'react'
// const [relation, showRelations] = useState([] as Family[])
