// import { ChangeEvent, FormEvent, useState } from 'react'

// export function Chart() {
//   const [data, setData] = useState({
//     sun: '',
//     moon: '',
//     rising: '',
//   })

//   const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
//     setData({
//       ...data,
//       [e.target.name]: e.target.value,
//     })
//   }

//   const submitHandler = (evt: FormEvent) => {
//     evt.preventDefault
//     dispatch(addSigns())
//   }

//   return (
//     <>
//       <p>Enter your big 3: </p>
//       <form onSubmit={submitHandler}>
//         <label htmlFor="sunSign">Sun Sign: </label>
//         <input
//           type="text"
//           value={data.sun}
//           name="sun"
//           onChange={changeHandler}
//         />
//         <label htmlFor="moonSign">Moon Sign: </label>
//         <input
//           type="text"
//           value={data.moon}
//           name="moon"
//           onChange={changeHandler}
//         />
//         <label htmlFor="risingSign">Rising Sign: </label>
//         <input
//           type="text"
//           value={data.rising}
//           name="rising"
//           onChange={changeHandler}
//         />
//         <button>Submit</button>
//       </form>
//     </>
//   )
// }
