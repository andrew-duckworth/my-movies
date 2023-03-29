import { useAppSelector, useAppDispatch } from '../hooks/redux'
import { fetchAllCollections } from '../actions/collectionAction'
import { useEffect } from 'react'


function Collections() {

  const dispatch = useAppDispatch()

//look in reducers index.ts
 const collections = useAppSelector((state) => state.something) 
 console.log(collections)


  useEffect(() => {
    dispatch(fetchAllCollections())
  },[])  
  

  return (
    <div>
      <h1>Collections</h1>
      <ul>
        {collections.map((collection) => {
        return (
            <div key={collection.id}>
                <h2>Title: {collection.title}</h2>
                <p>Title: {collection.content}</p>
            </div>
        )  
        })}
      </ul>

   </div>
  )
}

export default Collections