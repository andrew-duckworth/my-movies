import ErrorMessage from './ErrorMessage'
import Header from './Header'
// import Nav from './Nav'
import MangaList from './MangaList'
import FourPage from './FourPage'
import AddManga from './AddManga'
// import EditManga from './EditManga'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="app">
      <ErrorMessage />
      <Header />
      {/* <Nav /> */}
      <Routes>
        <Route path="*" element={<FourPage />} />
        <Route path="/" element={<MangaList />} />
        <Route path="/manga/add" element={<AddManga />} />
        {/* <Route path="/manga/:id" element={<EditManga />} /> */}
      </Routes>
    </div>
  )
}

export default App
