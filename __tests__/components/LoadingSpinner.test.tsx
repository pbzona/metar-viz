import React from 'react'
import { render } from '@testing-library/react'
import LoadingSpinner from '../../components/LoadingSpinner'

describe('LoadingSpinner', () => {
  it('renders the loading spinner with correct styling', () => {
    const { container } = render(<LoadingSpinner />)
    const spinnerElement = container.firstChild
    expect(spinnerElement).toHaveClass('flex justify-center items-center h-64')
    const animatedElement = spinnerElement?.firstChild
    expect(animatedElement).toHaveClass('animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500')
  })
})

