import Books from './Books'
import Games from './Games'
import Loading from './Loading'
import Booksearch from './Booksearch'
import Gamesearch from './Gamesearch'
import './App.css'

function App() {
  return (
    <>
      <header className="header">
        <h1 className="text-center mb-4 text-5xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl ">
          Things I want but can&apos;t afford
        </h1>
        <p className="text-center mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48">
          Ryan&apos;s list of hedonistic desire. Will you be the one to enable
          them to pierce the <span className="text-black">veil of gloom</span>{' '}
          for just a brief moment?
        </p>
      </header>
      <section className="main">
        <Loading />
        <Books />
        <div className="book_add">
          <Booksearch />
        </div>
        <Games />
        <div className="game_add">
          <Gamesearch />
        </div>
      </section>
    </>
  )
}

export default App
