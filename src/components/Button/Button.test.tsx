import React from 'react'
import { render, fireEvent } from '@testing-library/react'

import Button from './Button'

describe('Button', () => {
  describe('renders correct icons', () => {
    test('Play', () => {
      const { getByTestId } = render(<Button type="play" />)
      expect(getByTestId('play-icon')).toBeInTheDocument()
    })
    test('Pause', () => {
      const { getByTestId } = render(<Button type="pause" />)
      expect(getByTestId('pause-icon')).toBeInTheDocument()
    })
    test('Next', () => {
      const { getByTestId } = render(<Button type="right" />)
      expect(getByTestId('next-icon')).toBeInTheDocument()
    })
    test('Previous', () => {
      const { getByTestId } = render(<Button type="left" />)
      expect(getByTestId('previous-icon')).toBeInTheDocument()
    })
  })

  it('handles onClick', async () => {
    const onClick = jest.fn()
    const { getByTestId } = render(<Button onClick={onClick} type="play" />)
    const buttonEl = getByTestId('button')
    fireEvent.click(buttonEl)
    await expect(onClick).toHaveBeenCalledTimes(1)
  })
})
