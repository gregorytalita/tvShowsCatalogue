import React from 'react'
import { renderWithTheme } from '../../../test/utils/renderWithTheme'
import DetailsTemplate from './DetailsTemplate'

describe('DetailsTemplate', () => {

  it('should render "Title is not informed" if name prop is not sent', () => {
    const { getByText } = renderWithTheme(
      <DetailsTemplate  />
    )
    expect(getByText('Title is not informed')).toBeInTheDocument()
  })

  it('should render title if name prop is sent', () => {
    const { getByText } = renderWithTheme(
      <DetailsTemplate name='Home alone' />
    )
    expect(getByText('Home alone')).toBeInTheDocument()
  })

  it('should render "Summary is not informed" if summary prop is not sent', () => {
    const { getByText } = renderWithTheme(
      <DetailsTemplate  />
    )
    expect(getByText('Summary is not informed')).toBeInTheDocument()
  })

  it('should render summary if summary prop is not sent', () => {
    const { getByText } = renderWithTheme(
      <DetailsTemplate summary='A kid that was forgotten' />
    )
    expect(getByText('A kid that was forgotten')).toBeInTheDocument()
  })

  it('should render genres if genres prop array is provided', () => {
    const { getByText } = renderWithTheme(
      <DetailsTemplate genres={['Comedy']} />
    )
    expect(getByText('Comedy')).toBeInTheDocument()
  })

})
