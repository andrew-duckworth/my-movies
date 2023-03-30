import {CollectionData}  from '../../models/Collections'
import { delCollectionACT } from '../actions/collectionAction'
import {useAppDispatch } from '../hooks/redux'

interface Props {
  note: CollectionData
}



function ACollection({ note }: Props) {

  const dispatch = useAppDispatch()

  const handleDel = (id:number) => {
    console.log(`Deleting collection with id ${id}`);
    dispatch(delCollectionACT(id))
  }



  return (
    <div>
      <h3>{note.title}</h3>
      <p>{note.content}</p>
      <button className="del_button" onClick={() => handleDel(note.id)}>Delete</button>
    </div>
  )
}

export default ACollection