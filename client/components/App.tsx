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
        <h1 className="text-center mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl ">
          Things I want but can&apos;t afford
        </h1>
        <p className='mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48'>Ryan&apos;s list of hedonistic desire. Will you be the one to enable them to pierce the <span className='underline underline-offset-2 decoration-2 decoration-blue-500'>veil of gloom</span> for just a brief moment?</p>
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
