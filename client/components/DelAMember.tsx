import { Family } from '../../server/common/allModels'
import { delFamilyMember } from '../apis/apiClient'
import { useAppDispatch } from '../hooks/redux'
import { useState, ChangeEvent, FormEvent } from 'react'

interface Props {
  id: number
}

function deleteButton (props: Props) {
  const familyID = props.id
  const [data, useData] = useState(familyID)

  const onChange = 
  const handleSubmit = 


  return (
    <>
    <div>
      <form>
        <label></label>
        <input
      </form>
    </div>
    </>
  )


}