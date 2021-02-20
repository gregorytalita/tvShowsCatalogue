import React from 'react'
import { fireEvent } from '@testing-library/react';
import { renderWithTheme } from '../../../test/utils/renderWithTheme'
import ShowCard from './ShowCard'

describe('ShowCard', () => {

  it('should render "Not informed" as name in case prop is not defined', () => {
    const { getByText } = renderWithTheme(<ShowCard />)
    expect(getByText('Not informed')).toBeInTheDocument()
  })

  it('should render the name in case prop is defined', () => {
    const { getByText } = renderWithTheme(<ShowCard name='Friends' />)
    expect(getByText('Friends')).toBeInTheDocument()
  })

  it('should be able to trigger the onClick event', () => {

    const onClick = jest.fn();

    const { getByRole } = renderWithTheme(<ShowCard onClick={onClick}  />);

    fireEvent.click(getByRole('button'));

    expect(onClick).toHaveBeenCalled();

  });

})
