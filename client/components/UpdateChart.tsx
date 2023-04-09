// import { useNavigate } from 'react-router-dom'
// import { useAppDispatch, useAppSelector } from '../hooks/redux'
// import { ChangeEvent, FormEvent, useState } from 'react'
// import { getUsersThunk, updOneUserThunk } from '../actions/zodiac'
// import { BigThree, BigThreeData } from '../../common/Starsign'

// function UpdateChart() {
//   const dispatch = useAppDispatch()
//   const users = useAppSelector((state) => state.bigthree)
//   const navigate = useNavigate()
//   const [editData, setEditData] = useState({
//     name: '',
//     sun: '',
//     moon: '',
//     rising: '',
//   } as BigThree)

//   const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
//     setEditData({
//       ...editData,
//       [e.target.name]: e.target.value,
//     })
//   }

//   const submitHandler = (evt: FormEvent) => {
//     evt.preventDefault()
//     dispatch(updOneUserThunk(editData))
//       .then(() => {
//         dispatch(getUsersThunk())
//         navigate('/chart')
//       })
//       .catch((err) => {
//         console.log(err.message)
//       })
//   }

//   return (
//     <section>
//       <div className="add">
//         <h2>Update your big three: </h2>
//         <form onSubmit={submitHandler}>
//           <div className="text-item">
//             <label htmlFor="name">Name: </label>
//             <input
//               type="text"
//               value={editData.name}
//               name="name"
//               onChange={changeHandler}
//             />
//           </div>
//           <div className="text-item">
//             <label htmlFor="newSun">Sun Sign: </label>
//             <input
//               type="text"
//               value={editData.sun}
//               name="sun"
//               onChange={changeHandler}
//             />
//           </div>
//           <div className="text-item">
//             <label htmlFor="newMoon">Moon Sign: </label>
//             <input
//               type="text"
//               value={editData.moon}
//               name="moon"
//               onChange={changeHandler}
//             />
//           </div>
//           <div className="text-item">
//             <label htmlFor="newRising">Rising Sign: </label>
//             <input
//               type="text"
//               value={editData.rising}
//               name="rising"
//               onChange={changeHandler}
//             />
//           </div>
//           <button type="submit">Submit</button>
//         </form>
//       </div>
//     </section>
//   )
// }

// export default UpdateChart
