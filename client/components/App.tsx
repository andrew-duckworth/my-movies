import { Routes, Route } from 'react-router-dom'
import Header from './Header'
import Jokes from './Jokes'
import AddJoke from './AddJoke'
function App() {
  return (
    <>
      <Header />
      <Jokes />
      <Routes>
        <Route path="/jokes" element={<Jokes />}></Route>
        <Route path="/jokes/add" element={<AddJoke />}></Route>
      </Routes>
    </>
  )
}

export default App
