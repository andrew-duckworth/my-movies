import { fetchMovies, postOneMovie } from './movies'
import nock from 'nock'

describe('fetchMovies', () => {
  test('returns a list of movies', async () => {
    const movies = [
      { id: 1, imdb_id: 'tt0120338', title: 'Titanic', image: 'http://www.imdb.com/pretty_picture.jpeg', rating: 13 },
      { id: 2, imdb_id: 'tt0120339', title: 'The Matrix', image: 'http://www.imdb.com/pretty_picture.jpeg', rating: 10 }
    ]

    const scope = nock('http://localhost')
      .get('/api/v1/movies')
      .reply(200, movies)

    const result = await fetchMovies()
    expect(result).toEqual(movies)
    expect(scope.isDone()).toBe(true)
  })
})

describe('postOneMovie', () => {
  test('sends a movie to the back end', async () => {
    const movieDetails = { imdb_id: 'tt0120340', title: 'The Lion King', image: 'http://www.imdb.com/pretty_picture.jpeg', rating: 14 }
    const movieWithId = { id: 1, ...movieDetails }

    const scope = nock('http://localhost')
      .post('/api/v1/movies', movieDetails) // specifies the body (if body doesn't match, it will fail the test)
      .reply(200, movieWithId)

    const result = await postOneMovie(movieDetails)
    expect(result).toEqual(movieWithId)
    expect(scope.isDone()).toBe(true)
  })
})
