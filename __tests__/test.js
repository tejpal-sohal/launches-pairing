import { render, screen } from '@testing-library/react'
import IndexPage from '../pages/index'

describe('IndexPage', () => {
  test('renders index page title', () => {
    render(<IndexPage />)
    console.log(<IndexPage />)
    expect(screen.getByText('Welcome to my Next.js app!')).toBeInTheDocument()
  })
})
