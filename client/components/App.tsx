import { Routes, Route } from 'react-router-dom'
import SiteEntry from './SiteEntry'
import Jokes from './Jokes'
import AddJoke from './AddJoke'
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SiteEntry />}></Route>
        <Route path="/jokes" element={<Jokes />}></Route>
        <Route path="/jokes/add" element={<AddJoke />}></Route>
        <Route path="*" element={<SiteEntry />}></Route>
      </Routes>
    </>
  )
}

export default App
