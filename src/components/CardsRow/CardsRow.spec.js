import React from 'react'
import { fireEvent } from '@testing-library/react';
import { renderWithTheme } from '../../../test/utils/renderWithTheme'
import CardsRow from './CardsRow'

describe('CardsRow', () => {

  it('should render "Not informed" as label in case prop is not defined', () => {
    const { getByText } = renderWithTheme(<CardsRow shows={[]} />)
    expect(getByText('Not informed')).toBeInTheDocument()
  })

  it('should render the label in case prop is defined', () => {
    const { getByText } = renderWithTheme(<CardsRow label='Action' shows={[]} />)
    expect(getByText('Action')).toBeInTheDocument()
  })

  it('should render ShowCards in case prop shows contains any length', () => {
    const { getByText } = renderWithTheme(
      <CardsRow
        shows={[{
          name: 'Home alone',
          rating: 6
        }]}
      />
    )

    expect(getByText('Home alone')).toBeInTheDocument()
  })

  it('should be able to trigger the onClickCard event', () => {

    const onClick = jest.fn();

    const { getByRole } = renderWithTheme(
      <CardsRow
        onClickCard={onClick}
        shows={[{
          name: 'Home alone',
          rating: 6
        }]}
      />
    );

    fireEvent.click(getByRole('button'));

    expect(onClick).toHaveBeenCalled();

  });

})
