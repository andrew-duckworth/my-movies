import ErrorMessage from './ErrorMessage'
import Header from './Header'
import MangaList from './MangaList'
import FourPage from './FourPage'
import AddManga from './AddManga'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="app">
      <ErrorMessage />
      <Header />
      <Routes>
        <Route path="*" element={<FourPage />} />
        <Route path="/" element={<MangaList />} />
        <Route path="/manga/add" element={<AddManga />} />
      </Routes>
    </div>
  )
}

export default App
