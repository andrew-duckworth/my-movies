import Family from './Family'

import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <header className="header">
        <h1>Welcome to the Knudsen Family List</h1>
      </header>
      <section className="main">
        <Routes>
          <Route path="/" element={<Family />} />
        </Routes>
      </section>
    </>
  )
}

export default App
