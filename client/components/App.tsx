import Books from './Books'
import Games from './Games'
import Loading from './Loading'
import Booksearch from './Booksearch'

function App() {
  return (
    <>
      <header className="header">
        <h1>Things I want but can&apos;t afford</h1>
      </header>
      <section className="main">
        <Loading />
        <Books />
        <Booksearch />
        <Games />
      </section>
    </>
  )
}

export default App
/*

https://openlibrary.org/developers/api
https://openlibrary.org/dev/docs/api/covers
https://api.rawg.io/docs/


Covers are hard - sometimes the API only has data for particular editions
Publish date formats are inconsistent

booksapi.ts add and remove book
Add and remove book components -> process raw book data in api 
Will need to turn multiple authors into comma separated list

CSS & accessibility
Games?
*/
