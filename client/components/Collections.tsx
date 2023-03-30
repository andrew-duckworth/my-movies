import { useAppSelector, useAppDispatch } from '../hooks/redux'
import { fetchAllCollections } from '../actions/collectionAction'
import { useEffect } from 'react'
import ACollection from './ACollection'

function Collections() {

  const dispatch = useAppDispatch()

//look in reducers index.ts
 const collections = useAppSelector((state) => state.something) 
 console.log(collections)


  useEffect(() => {
    dispatch(fetchAllCollections())
  },[dispatch])  
  

  return (
    <>
      {collections.map((note, i) => (
        <ACollection key={i} note={note} />
      ))}
    </>
  )
}

export default Collections



