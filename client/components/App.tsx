import { Route, Routes } from 'react-router-dom'
import ChartList from './ChartList'
import { AddChart } from './AddChart'

import Nav from './Nav'
import SignsList from './SignsList'

function App() {
  return (
    <>
      <header className="header">
        <img src="../../images/mario.png" alt="mario cartoon" />
        <h1 className="header__1">Starsigns!</h1>
        <div className="header__2">
          <Nav />
        </div>
        <img src="../../images/mario.png" alt="mario cartoon" />
      </header>
      <section className="main">
        <Routes>
          <Route path="/" element={<SignsList />} />
          <Route path="/chart" element={<ChartList />} />
          <Route path="/add" element={<AddChart />} />
        </Routes>
      </section>
    </>
  )
}

export default App
