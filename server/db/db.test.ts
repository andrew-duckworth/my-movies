import connection from "./connection"
import * as db from "./db"

const testDb = connection

beforeAll(async () => {
  await testDb.migrate.latest()
})

beforeEach(async () => {
  await testDb.seed.run()
})

describe('db.getAllMovies', () => {
  test('gets the movies', async () => {
    const movies = await db.getAllMovies(testDb)
    expect(movies).toHaveLength(2)

    const firstMovie = movies[0]
    expect(firstMovie.id).toBe(1)
    expect(firstMovie.imdb_id).toBe('tt0120338')
    expect(firstMovie.title).toBe('Titanic')
    expect(typeof firstMovie.image).toBe('string')
    expect(firstMovie.rating).toBe(13)
  })
})

describe('db.addMovie', () => {
  test('adds a third movie to the database', async () => {
    const data = {
      imdb_id: 'tt0123456',
      title: 'The Batman',
      image: 'http://www.imdb.com/pretty_picture.jpeg',
      rating: 10
    }

    await db.addMovie(data, testDb)
    const movies = await db.getAllMovies(testDb)
    expect(movies).toHaveLength(3)

    const expected = {
      id: 3,
      ...data,
    }

    const theAddedMovie = movies[2]
    expect(theAddedMovie).toEqual(expected)
  })

  test('returns the movie details', async () => {
    const data = {
      imdb_id: 'tt0123456',
      title: 'The Batman',
      image: 'http://www.imdb.com/pretty_picture.jpeg',
      rating: 10
    }

    const newMovie = await db.addMovie(data, testDb)
    expect(newMovie).toHaveLength(1)

    const theAddedMovie = newMovie[0]

    expect(theAddedMovie.id).toBe(4)
    expect(theAddedMovie.imdb_id).toBe('tt0123456')
    expect(theAddedMovie.title).toBe('The Batman')
    expect(theAddedMovie.image).toBe('http://www.imdb.com/pretty_picture.jpeg')
    expect(theAddedMovie.rating).toBe(10)
  })
})
