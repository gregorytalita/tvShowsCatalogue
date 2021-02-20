import React from 'react'
import { renderWithTheme } from '../../../test/utils/renderWithTheme'
import GenreChips from './GenreChips'

describe('GenreChips', () => {
  it('should render all values from array', () => {

    const { getByText } = renderWithTheme(<GenreChips genres={[ 'Comedy', 'Drama' ]} />)

    expect(getByText('Comedy')).toBeInTheDocument()
    expect(getByText('Drama')).toBeInTheDocument()

  })
})
