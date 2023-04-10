import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import App from './App'

describe('<App />', () => {
  it('renders the hamsters', () => {
    render(<App />)
    const hamsterDisplay = screen.getByText(/Hamsters: /)
    expect(hamsterDisplay).toBeInTheDocument()
  })
})
