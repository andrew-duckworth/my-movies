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
        <Route path="/jokes" element={<App />}></Route>
        <Route path="/joke/add" element={<AddJoke />}></Route>
      </Routes>
    </>
  )
}

export default App
