import React from 'react'
import { fireEvent } from '@testing-library/react';
import { renderWithTheme } from '../../../test/utils/renderWithTheme'
import DetailsDrawer from './DetailsDrawer'

describe('DetailsDrawer', () => {

  it('should render children component and drawer open equals true', () => {
    const { getByText } = renderWithTheme(
      <DetailsDrawer open={true}>
        <h1>Hello, world!</h1>
      </DetailsDrawer>
    )
    expect(getByText('Hello, world!')).toBeInTheDocument()
  })

  it('should not render children component and drawer open equals false', () => {
    const { queryByText } = renderWithTheme(
      <DetailsDrawer open={false}>
        <h1>Hello, world!</h1>
      </DetailsDrawer>
    )
    expect(queryByText('Hello, world!')).not.toBeInTheDocument()
  })
})
