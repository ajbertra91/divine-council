import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from './App.tsx'

describe('App', () => {
  it('renders the hero heading', () => {
    render(<App />)
    expect(
      screen.getByRole('heading', { name: /the divine council/i }),
    ).toBeInTheDocument()
  })
})
