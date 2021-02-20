import React from 'react'
import { renderWithTheme } from '../../../test/utils/renderWithTheme'
import Rate from './Rate'

describe('Rate', () => {
  it('should render 0 if value is not sent', () => {
    const { getByText } = renderWithTheme(<Rate />)
    expect(getByText('0')).toBeInTheDocument()
  })

  it('should render the specified value', () => {
    const { getByText } = renderWithTheme(<Rate value='8.3' />)
    expect(getByText('8.3')).toBeInTheDocument()
  })

  it('should render green if value is equal or greater than 8', () => {
    const { getByTestId } = renderWithTheme(<Rate value='8.3' data-testid='rating-green' />)
    expect(getByTestId('rating-green')).toHaveStyle('color: #4caf50')
  })

  it('should render orange if value is equal or greater than 6', () => {
    const { getByTestId } = renderWithTheme(<Rate value='6' data-testid='rating-orange' />)
    expect(getByTestId('rating-orange')).toHaveStyle('color: #ff9800')
  })

  it('should render red if value is lower than 6', () => {
    const { getByTestId } = renderWithTheme(<Rate value='5.9' data-testid='rating-red' />)
    expect(getByTestId('rating-red')).toHaveStyle('color: #f44336')
  })
})
