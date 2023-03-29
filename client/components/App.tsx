import Collections from './Collections'
// import CollectionDetails from './CollectionDetails'
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <>
      <header className="header">
        <h1>My Collection</h1>
      </header>
      <section className="main">
      <Routes>
        <Route path='/' element={<Collections />} />
        {/* <Route path='/collections/:id' element={<CollectionDetails />} /> */}
      </Routes> 

      </section>
    </>
  )
}

export default App


