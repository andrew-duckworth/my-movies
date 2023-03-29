import Shows from './Shows'
import Scheduler from './Scheduler'

function App() {
  return (
    <>
      <header className="header">
        <h1>My Collection</h1>
      </header>
      <section>
        {' '}
        <Scheduler />
      </section>
      <section className="main">{<Shows />}</section>
    </>
  )
}

export default App
