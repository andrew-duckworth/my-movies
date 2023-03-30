import {CollectionData}  from '../../models/Collections'
import { delCollections,  } from '../actions/collectionAction'
import {useAppDispatch } from '../hooks/redux'
import { ChangeEvent, FormEvent, useState } from 'react'

interface Props {
  note: CollectionData
}



function ACollection({ note }: Props) {

  const dispatch = useAppDispatch()

  // const [formData, updateCollection] = useState(note)

  const handleDel = (id:number) => {
    dispatch(delCollections(id))
  }



  return (
    <div>
      <h3>{note.title}</h3>
      <p>{note.content}</p>
      <p>Category: {note.category}</p>
      <button className="del_button" onClick={() => handleDel(note.id)}>Delete</button>
    </div>
  )
}

export default ACollection