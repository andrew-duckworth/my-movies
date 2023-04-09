import { fetchAllData } from '../actions/familyActions'
import { useAppDispatch, useAppSelector } from '../hooks/redux'
import { deleteOneMember } from '../actions/familyActions'
import { useEffect } from 'react'
//IMPORTING ADD MEMBER COMPONENT INSTEAD OF TO APP
import AddAMember from './AddAMember'

function ShowAllFamily() {
  // note: family (globalState.family) comes from the index.ts main reducer file.
  const knudsen = useAppSelector((globalState) => globalState.family)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchAllData())
  }, [dispatch])

  const handleDel = (id: number) => {
    dispatch(deleteOneMember(id))
  }

  // const handleView = (id: number) => {}

  return (
    <>
      {/* <h2>The Knudsen Family</h2> */}
      <div className='boardWrapper'>
        {knudsen.map((member) => (
          <div className='familyWrapper' key={member.id}>
            <p><strong>Name: </strong>{member.name}</p>
            <p><strong>Nicknames: </strong> {member.nicknames}</p>
            <p><strong>Position in the family: </strong> {member.position}</p>
            {/* <img src='empty_bag_4x.jpg' alt=""></img> */}
             <br></br>
            {/* <button onClick={() => handleView(member.id)}>View</button> */}
            <button className="card" onClick={() => handleDel(member.id)}>Delete</button>
          </div>
        ))}
      </div>
        {<AddAMember />}
    </>
  )
}

export default ShowAllFamily

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
