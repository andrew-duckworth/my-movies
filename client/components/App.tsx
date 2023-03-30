import Shows from './Shows'
import Scheduler from './Scheduler'
import SchedulerButton from './Scheduler'

function App() {
  return (
    <>
      <header className="header">
        <h1>My Application</h1>
      </header>
      <section>
        <Scheduler />
        <SchedulerButton />
      </section>
      <section className="main">{<Shows />}</section>
    </>
  )
}

export default App
