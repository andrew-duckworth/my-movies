import '@testing-library/jest-dom'
import { act, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import AddMovie from './AddMovie'

// ----- HOOK MOCKS -----

jest.mock('../hooks/redux', () => ({
  useAppDispatch: () => jest.fn(),
}))

// TODO: create mock router instead of mocking useNavigate
jest.mock('react-router-dom', () => ({
  useNavigate: () => jest.fn(),
}))

// ----- API MOCKS -----

import { searchForMovie } from '../apis/imdb'
jest.mock('../apis/imdb', () => ({
  searchForMovie: jest.fn().mockImplementation(() => Promise.resolve([
      { id: 'tt0120338', resultType: 'movie', title: 'Titanic', description: 'A movie about a boat', image: 'http://www.imdb.com/pretty_picture.jpeg' },
      { id: 'tt0120339', resultType: 'movie', title: 'The Matrix', description: 'A movie about a computer', image: 'http://www.imdb.com/pretty_picture.jpeg' },
    ])
  )
}))

import { addMovieThunk } from '../actions/movies'
jest.mock('../actions/movies', () => ({
  addMovieThunk: jest.fn()
}))

// ----- TESTS -----

describe('<AddMovie />', () => {
  test('should render a form with an input and a button', () => {
    render(<AddMovie />)

    const input = screen.getByRole('textbox', { name: 'Title:' })
    const button = screen.getByRole('button', { name: 'Submit' })

    expect(input).toBeInTheDocument()
    expect(button).toBeInTheDocument()
  })

  test('user should be able to enter a movie and click the submit button', async () => {
    const user = userEvent.setup()
    render(<AddMovie />)

    const input = screen.getByRole('textbox', { name: 'Title:' })
    const button = screen.getByRole('button', { name: 'Submit' })

    expect(input).toHaveValue('')

    await act(async () => {
      await user.type(input, 'Shrek')
      await user.click(button)
    })

    expect(input).toHaveValue('Shrek')
    expect(searchForMovie).toHaveBeenCalledWith('Shrek')
  })

  test('user should be able to see a list of movies', async () => {
    const user = userEvent.setup()
    render(<AddMovie />)

    const button = screen.getByRole('button', { name: 'Submit' })

    await act(async () => {
      await user.click(button)
    })

    const titanicResult = screen.getByRole('heading', { name: 'Titanic' })
    expect(titanicResult).toBeInTheDocument()

    const matrixResult = screen.getByRole('heading', { name: 'The Matrix' })
    expect(matrixResult).toBeInTheDocument()
  })

  test('user should be able to add a movie to their list', async () => {
    const user = userEvent.setup()
    render(<AddMovie />)

    const button = screen.getByRole('button', { name: 'Submit' })

    await act(async () => {
      await user.click(button)
    })

    const addTitanicButton = screen.getByRole('button', { name: /Add Titanic/ })
    await act(async () => {
      await user.click(addTitanicButton)
    })

    expect(addMovieThunk).toHaveBeenCalledWith({
      imdb_id: 'tt0120338',
      title: 'Titanic',
      image: 'http://www.imdb.com/pretty_picture.jpeg',
      rating: 4
    })

    const addMatrixButton = screen.getByRole('button', { name: /Add The Matrix/ })
    await act(async () => {
      await user.click(addMatrixButton)
    })

    expect(addMovieThunk).toHaveBeenCalledWith({
      imdb_id: 'tt0120339',
      title: 'The Matrix',
      image: 'http://www.imdb.com/pretty_picture.jpeg',
      rating: 4
    })

    expect(addMovieThunk).toHaveBeenCalledTimes(2)
  })
})
