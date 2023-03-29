import { useState } from 'react'
import { FormEvent, ChangeEvent } from 'react'
import * as Models from '../../server/common/allModels'
import { useAppDispatch } from '../hooks/redux'

export default function addAMember() {
  // const [member, newMember] = useState([] as Models[])
  const [formData, setFormData] = useState({
    name: '',
    nickname: '',
    position: '',
    image: '',
  })

  // const dispatch = useAppDispatch()

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
    // dispatch(setFormData())
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h4>Add a new family member....</h4>
        <label htmlFor="addName">Name: </label>
        <br></br>
        <input
          id="addName"
          name="name"
          type="text"
          value={formData.name}
          onChange={onChange}
        />
        <br></br>
        <br></br>
        <label htmlFor="addNickname">Nickname: </label>
        <br></br>
        <input
          id="addNickname"
          name="nickname"
          type="text"
          value={formData.nickname}
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
        <button>Submit Member</button>
      </form>
    </>
  )
}
