import Family from './Family'
import AddAMember from './AddAMember'

function App() {
  return (
    <>
      <header className="header"></header>
      <section className="main">
        {<Family />}
        {<AddAMember />}
      </section>
    </>
  )
}

export default App
