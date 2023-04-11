import Albums from './Albums'
import NewAlbum from './NewAlbum'

function App() {
  return (
    <>
      <header className="header">
        <h1>Taylor Swift Discography</h1>
      </header>
      <section className="main">
        <NewAlbum />
        <Albums />
      </section>
    </>
  )
}

export default App
