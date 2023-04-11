import imdbReducer from './imdb'
import { Action } from '../actions/movies'

describe('imdbReducer', () => {
  test('iniialises with an empty array', () => {
    const result = imdbReducer(undefined, { type: 'SET_ERROR', payload: 'This is fake' })
    expect(result).toEqual([])
  })

  test('returns the current state when the action type is not recognised', () => {
    const state = [{ id: 'tt0120338', resultType: 'movie', image: 'http://www.imdb.com/pretty_picture.jpeg', title: 'Titanic', description: 'A movie about a boat' }]
    const result = imdbReducer(state, { type: 'SET_ERROR', payload: 'This is fake' })
    expect(result).toEqual(state)
  })

  test('when action is IMDB_DATA the new array is returned', () => {
    const state = [{ id: 'tt0120338', resultType: 'movie', title: 'Titanic', description: 'A movie about a boat', image: 'http://www.imdb.com/pretty_picture.jpeg' }]
    const shrekResults = [
      { id: 'tt0120339', resultType: 'movie', title: 'Shrek', description: 'A movie about an ogre', image: 'http://www.imdb.com/pretty_picture.jpeg' },
      { id: 'tt0120340', resultType: 'movie', title: 'Shrek 2', description: 'A second movie about an ogre', image: 'http://www.imdb.com/pretty_picture.jpeg' },
      { id: 'tt0120341', resultType: 'movie', title: 'Shrek 3', description: 'A third movie about an ogre', image: 'http://www.imdb.com/pretty_picture.jpeg' },
    ]

    const action: Action = {
      type: 'IMDB_DATA',
      payload: shrekResults
    } as Action

    const result = imdbReducer(state, action)
    expect(result).toEqual(shrekResults)
  })
})
