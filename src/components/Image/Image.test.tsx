import React from 'react'
import { render } from '@testing-library/react'

import Image from './Image'

describe('Image', () => {
  it('renders', () => {
    const url = 'image.jpg'
    const { getByTestId } = render(<Image isActive={false} url={url} />)

    const image = getByTestId('image')
    expect(image.getAttribute('src')).toEqual(url)
  })
})
