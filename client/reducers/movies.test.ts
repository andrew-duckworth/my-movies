import { Action } from '../actions/movies'
import moviesReducer from './movies'

describe('moviesReducer', () => {
  test('initialises with an empty array', () => {
    const result = moviesReducer(undefined, { type: 'SET_ERROR', payload: 'This is fake' })
    expect(result).toEqual([])
  })

  test('returns the current state when the action type is not recognised', () => {
    const state = [{ id: 1, imdb_id: 'tt0120338', title: 'Titanic', image: 'http://www.imdb.com/pretty_picture.jpeg', rating: 5 }]
    const result = moviesReducer(state, { type: 'SET_ERROR', payload: 'This is fake' })
    expect(result).toEqual(state)
  })

  test('SHOW_MOVIES - returns the new array', () => {
    const moviesFromDb = [
      { id: 1, imdb_id: 'tt0120339', title: 'Shrek', image: 'http://www.imdb.com/pretty_picture.jpeg', rating: 5 },
      { id: 2, imdb_id: 'tt0120340', title: 'Shrek 2', image: 'http://www.imdb.com/pretty_picture.jpeg', rating: 5 },
      { id: 3, imdb_id: 'tt0120341', title: 'Shrek 3', image: 'http://www.imdb.com/pretty_picture.jpeg', rating: 5 },
    ]

    const action = {
      type: 'SHOW_MOVIES',
      payload: moviesFromDb
    } as Action

    const result = moviesReducer([], action)
    expect(result).toEqual(moviesFromDb)
  })

  test('SAVE_ONE_MOVIE - adds new item to the array', () => {
    const state = [
      { id: 1, imdb_id: 'tt0120339', title: 'Shrek', image: 'http://www.imdb.com/pretty_picture.jpeg', rating: 5 },
      { id: 2, imdb_id: 'tt0120340', title: 'Shrek 2', image: 'http://www.imdb.com/pretty_picture.jpeg', rating: 5 },
      { id: 3, imdb_id: 'tt0120341', title: 'Shrek 3', image: 'http://www.imdb.com/pretty_picture.jpeg', rating: 5 },
    ]

    const newMovie = { id: 4, imdb_id: 'tt0120342', title: 'Shrek 4', image: 'http://www.imdb.com/pretty_picture.jpeg', rating: 5 }

    const action = {
      type: 'SAVE_ONE_MOVIE',
      payload: newMovie
    } as Action

    const expected = [ ...state, newMovie ]
    const result = moviesReducer(state, action)
    expect(result).toEqual(expected)
  })
})
