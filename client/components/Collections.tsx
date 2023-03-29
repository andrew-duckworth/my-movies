import { useAppSelector, useAppDispatch } from '../hooks'
import { fetchAllCollections } from '../actions/collectionAction'
import { useEffect } from 'react'


function Collections() {
  const dispatch = useAppDispatch()
  const collections = useAppSelector((state) => state.collectionsReducer) 

  useEffect(() => {
    dispatch(fetchAllCollections())
  })  
  

  return (
    <div>
      <h1>Wombats</h1>
      <ul>
        {collections.map((collection) => {
        return (
            <div key={collection.id}>
                <h2>Title: {collection.title}</h2>
            </div>
        )  
        })}
      </ul>

   </div>
  )
}

export default Collections