import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Nav from './Nav'
import SignsList from './SignsList'

function App() {
  return (
    <>
      <header className="header">
        <h1>Starsigns!</h1>
        <Nav />
      </header>
      <section className="main">
        <Routes>
          <Route path="/" element={<SignsList />} />
        </Routes>
      </section>
    </>
  )
}

export default App
