import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { SelectorFunc } from '../hooks/redux'
import { Movie } from '../../common/types'

import MovieList from './MovieList'

jest.mock('../hooks/redux', () => ({
  // Simple mock for useAppSelector - just returns a list of movies
  // useAppSelector: () => ([
  //     { id: 1, imdb_id: 'tt0111161', title: 'The Shawshank Redemption', image: 'https://m.media-amazon.com/images/M/MV5BMTI4MDk4NjYxNF5BMl5BanBnXkFtZTgwMjQ5NjQxMzE@._V1_SX300.jpg', rating: 4 },
  //     { id: 2, imdb_id: 'tt0068646', title: 'The Godfather', image: 'https://m.media-amazon.com/images/M/MV5BMTI4MDk4NjYxNF5BMl5BanBnXkFtZTgwMjQ5NjQxMzE@._V1_SX300.jpg', rating: 4 },
  //     { id: 3, imdb_id: 'tt0468569', title: 'The Dark Knight', image: 'https://m.media-amazon.com/images/M/MV5BMTI4MDk4NjYxNF5BMl5BanBnXkFtZTgwMjQ5NjQxMzE@._V1_SX300.jpg', rating: 4 },
  //   ]
  // ),

  // More complex useAppSelector mock - ensures component is selecting the correct slice of state
  useAppSelector: (fn: SelectorFunc<Movie[]>) => fn({ movie: [
    { id: 1, imdb_id: 'tt0111161', title: 'The Shawshank Redemption', image: 'https://m.media-amazon.com/images/M/MV5BMTI4MDk4NjYxNF5BMl5BanBnXkFtZTgwMjQ5NjQxMzE@._V1_SX300.jpg', rating: 4 },
    { id: 2, imdb_id: 'tt0068646', title: 'The Godfather', image: 'https://m.media-amazon.com/images/M/MV5BMTI4MDk4NjYxNF5BMl5BanBnXkFtZTgwMjQ5NjQxMzE@._V1_SX300.jpg', rating: 4 },
    { id: 3, imdb_id: 'tt0468569', title: 'The Dark Knight', image: 'https://m.media-amazon.com/images/M/MV5BMTI4MDk4NjYxNF5BMl5BanBnXkFtZTgwMjQ5NjQxMzE@._V1_SX300.jpg', rating: 4 },
  ]
}),
}))

describe('<MovieList />', () => {
  test('should render a list of movies from redux', () => {
    render(<MovieList />)

    const movie1 = screen.getByText('The Shawshank Redemption')
    const movie2 = screen.getByText('The Godfather')
    const movie3 = screen.getByText('The Dark Knight')

    expect(movie1).toBeInTheDocument()
    expect(movie2).toBeInTheDocument()
    expect(movie3).toBeInTheDocument()
  })

  test('should render a poster for each movie', () => {
    render(<MovieList />)

    const poster1 = screen.getByAltText('poster for The Shawshank Redemption')
    const poster2 = screen.getByAltText('poster for The Godfather')
    const poster3 = screen.getByAltText('poster for The Dark Knight')

    expect(poster1).toBeInTheDocument()
    expect(poster2).toBeInTheDocument()
    expect(poster3).toBeInTheDocument()
  })
})