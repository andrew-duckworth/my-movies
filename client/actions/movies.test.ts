import nock from 'nock'
import {
  getMoviesAction,
  getMoviesThunk,
  addMovieThunk,
  saveOneMovie,
  searchMoviesThunk,
  setImdbMovies
} from './movies'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type SimpleThunk = (dispatch: any) => Promise<any>

describe('getMovies', () => {
  test('Action', () => {
    const movies = [
      { id: 1, imdb_id: 'tt0120338', title: 'Titanic', image: 'http://www.imdb.com/pretty_picture.jpeg', rating: 13 },
      { id: 2, imdb_id: 'tt0120339', title: 'The Matrix', image: 'http://www.imdb.com/pretty_picture.jpeg', rating: 10 }
    ]

    const expected = {
      type: 'SHOW_MOVIES',
      payload: movies
    }

    const result = getMoviesAction(movies)
    expect(result).toEqual(expected)
  })

  test('Thunk dispatches action on successful API call', async () => {
    const movies = [
      { id: 1, imdb_id: 'tt0120338', title: 'Titanic', image: 'http://www.imdb.com/pretty_picture.jpeg', rating: 13 },
      { id: 2, imdb_id: 'tt0120339', title: 'The Matrix', image: 'http://www.imdb.com/pretty_picture.jpeg', rating: 10 }
    ]

    const scope = nock('http://localhost')
      .get('/api/v1/movies')
      .reply(200, movies)

    const expected = {
      type: 'SHOW_MOVIES',
      payload: movies
    }

    const thunk = getMoviesThunk() as SimpleThunk
    const dispatch = jest.fn()

    await thunk(dispatch)
    
    expect(dispatch).toHaveBeenCalledWith(expected)
    expect(scope.isDone()).toBe(true)
  })

  test('Thunk dispatches error action on failed API call', async () => {
    const scope = nock('http://localhost')
      .get('/api/v1/movies')
      .reply(500)

    const thunk = getMoviesThunk() as SimpleThunk
    const dispatch = jest.fn()

    await thunk(dispatch)
    
    expect(dispatch).toHaveBeenCalledWith({ type: 'SET_ERROR', payload: 'Error fetching saved movies' })
    expect(scope.isDone()).toBe(true)
  })
})

describe('addMovie', () => {
  test('Action', () => {
    const movie = { id: 1, imdb_id: 'tt0120338', title: 'Titanic', image: 'http://www.imdb.com/pretty_picture.jpeg', rating: 13 }

    const expected = {
      type: 'SAVE_ONE_MOVIE',
      payload: movie
    }

    const result = saveOneMovie(movie)
    expect(result).toEqual(expected)
  })

  test('Thunk dispatches action on successful API call', async () => {
    const movieDetails = { imdb_id: 'tt0120340', title: 'The Lion King', image: 'http://www.imdb.com/pretty_picture.jpeg', rating: 14 }
    const movieWithId = { id: 3, ...movieDetails }

    const scope = nock('http://localhost')
      .post('/api/v1/movies', movieDetails)
      .reply(200, movieWithId)

    const expected = {
      type: 'SAVE_ONE_MOVIE',
      payload: movieWithId
    }

    const thunk = addMovieThunk(movieDetails) as SimpleThunk
    const dispatch = jest.fn()

    await thunk(dispatch)
    
    expect(dispatch).toHaveBeenCalledWith(expected)
    expect(scope.isDone()).toBe(true)
  })

  test('Thunk dispatches error action on failed API call', async () => {
    const movieDetails = { imdb_id: 'tt0120340', title: 'The Lion King', image: 'http://www.imdb.com/pretty_picture.jpeg', rating: 14 }

    const scope = nock('http://localhost')
      .post('/api/v1/movies', movieDetails)
      .reply(500)

    const thunk = addMovieThunk(movieDetails) as SimpleThunk
    const dispatch = jest.fn()

    await thunk(dispatch)
    
    expect(dispatch).toHaveBeenCalledWith({ type: 'SET_ERROR', payload: 'Error saving movie' })
    expect(scope.isDone()).toBe(true)
  })
})

describe('searchMovies', () => {
  test('Action', () => {
    const movies = [
      { id: 'tt0120338', resultType: 'movie', image: 'http://www.imdb.com/pretty_picture.jpeg', title: 'Titanic', description: 'A movie about a boat' },
      { id: 'tt0120339', resultType: 'movie', image: 'http://www.imdb.com/pretty_picture.jpeg', title: 'The Matrix', description: 'A movie about a computer' },
    ]

    const expected = {
      type: 'IMDB_DATA',
      payload: movies
    }

    const result = setImdbMovies(movies)
    expect(result).toEqual(expected)
  })

  test('Thunk dispatches action on successful API call', async () => {
    const results = [
      { id: 'tt0120338', resultType: 'movie', title: 'Shrek', description: 'A movie about an ogre', image: 'http://www.imdb.com/pretty_picture.jpeg', },
      { id: 'tt0120339', resultType: 'movie', title: 'Shrek 2', description: 'A second movie about an ogre', image: 'http://www.imdb.com/pretty_picture.jpeg', },
      { id: 'tt0120340', resultType: 'movie', title: 'Shrek 3', description: 'A third movie about an ogre', image: 'http://www.imdb.com/pretty_picture.jpeg', },
    ]

    process.env.IMDB_KEY = '12345'

    const scope = nock('https://imdb-api.com/en/API/SearchMovie')
      .get('/12345/shrek')
      .reply(200, { results })

    const expected = {
      type: 'IMDB_DATA',
      payload: results
    }

    const thunk = searchMoviesThunk('shrek') as SimpleThunk
    const dispatch = jest.fn()

    await thunk(dispatch)
    
    expect(dispatch).toHaveBeenCalledWith(expected)
    expect(scope.isDone()).toBe(true)
  })

  test('Thunk dispatches error action on failed API call', async () => {
    const scope = nock('https://imdb-api.com/en/API/SearchMovie')
      .get('/12345/shrek')
      .reply(500)

    const thunk = searchMoviesThunk('shrek') as SimpleThunk
    const dispatch = jest.fn()

    await thunk(dispatch)

    expect(dispatch).toHaveBeenCalledWith({ type: 'SET_ERROR', payload: 'Error fetching movies from IMDB' })
    expect(scope.isDone()).toBe(true)
  })
})