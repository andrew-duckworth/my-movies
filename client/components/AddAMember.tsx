import { useState } from 'react'
import { FormEvent, ChangeEvent } from 'react'
// import { Family } from '../../server/common/allModels'
import { addOneMember } from '../actions/familyActions'
import { useAppDispatch } from '../hooks/redux'

export default function AddAMember() {
 
// const [formData, setFormData] = useState({} as Family) 
//THIS WOULD ALSO WORK....
  const [formData, setFormData] = useState({
    name: '',
    nicknames: '',
    position: '',
    image: '',
  })

  const dispatch = useAppDispatch()

  const onChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const value = evt.target.value
    console.log(evt.target.value)

    setFormData({
      ...formData,
      [evt.target.name]: value,
    })
  }

  const handleSubmit = (evt: FormEvent) => {
    evt.preventDefault()
    dispatch(addOneMember(formData))
  }

  return (
    <>
    <div>
      <form className="formWrapper" onSubmit={handleSubmit}>
        <div>
        <h2>Add a new family member....</h2>
        <label htmlFor="addName">Name: </label>
        <br></br>
        <input
          id="addName"
          name="name"
          type="text"
          value={formData.name}
          // value={formData.name || ''} 
          onChange={onChange}
        />
        <br></br>
        <br></br>
        <label htmlFor="addNickname">Nicknames: </label>
        <br></br>
        <input
          id="addNickname"
          name="nicknames"
          type="text"
          value={formData.nicknames}
          onChange={onChange}
        />
        <br></br>
        <br></br>
        <label htmlFor="addPosition">Position: </label>
        <br></br>
        <input
          id="addPosition"
          name="position"
          type="text"
          value={formData.position}
          onChange={onChange}
        />
        <br></br>
        <br></br>
        <label htmlFor="addImage">Image link: </label>
        <br></br>
        <input
          id="addImage"
          name="image"
          type="text"
          value={formData.image}
          onChange={onChange}
        />
        <br></br>
        <br></br>
        <button>Submit new member</button>
        </div>
      </form>
      </div>
    </>
  )
}

    //////////////////////
    // TO ADD IN A LOADING STATE (NEED COMPONENT)
    // interface Props {
    //   variant?: 'edit' | 'new'
    //   loading?: boolean
    // }
  
    // if (props.loading) return <p>Loading...</p>