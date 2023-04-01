import Books from './Books'
import Games from './Games'
import Loading from './Loading'
import Booksearch from './Booksearch'
import LoadingNewBook from './LoadingNewBook'
import Gamesearch from './Gamesearch'
import './App.css'

function App() {
  return (
    <>
      <header className="header">
        <h1 className="text-primary text-4xl font-bold">
          Things I want but can&apos;t afford
        </h1>
      </header>
      <section className="main">
        <Loading />
        <Books />
        <div className="book_add">
          <Booksearch />
          <LoadingNewBook />
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
/*

https://openlibrary.org/developers/api
https://openlibrary.org/dev/docs/api/covers
https://api.rawg.io/docs/ - API key f5d35997743c4c2ca13f7f8936a30ef8


Covers are hard - sometimes the API only has data for particular editions
Publish date formats are inconsistent

booksapi.ts add and remove book
Add and remove book components -> process raw book data in api 
Will need to turn multiple authors into comma separated list

CSS & accessibility
Store api key as env
Loading animations for games
Error handling
*/
