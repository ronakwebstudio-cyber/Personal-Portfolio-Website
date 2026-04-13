import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import App from './App'

describe('App', () => {
  it('renders hero text', () => {
    render(<App />)
    expect(screen.getByText(/Hi, I am Ronak Pradhan/i)).toBeDefined()
  })
})
