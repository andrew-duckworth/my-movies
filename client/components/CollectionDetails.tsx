// import { useAppSelector, useAppDispatch } from '../hooks/redux'
// import { fetchCollectionById } from '../actions/collectionAction'
// import { useEffect } from 'react'
// import { useParams } from 'react-router-dom'

// function CollectionDetails() {

//   const dispatch = useAppDispatch()

//   // Access the collection object from the Redux store state
//   const collection = useAppSelector((state) => state.collection) 

//   // Extract the id from the URL params using useParams
//   const { id } = useParams()

//   useEffect(() => {
//     dispatch(fetchCollectionById(id))
//   }, [dispatch, id])

//   return (
//     <div>
//       <h2>{collection.title}</h2>
//       <p>{collection.content}</p>
//     </div>
//   )
// }

// export default CollectionDetails
