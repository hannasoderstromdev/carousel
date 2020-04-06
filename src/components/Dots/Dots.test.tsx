import React from 'react'
import { render } from '@testing-library/react'

import Dots from './Dots'

describe('Dots', () => {
  it('renders corret number of dots', () => {
    const images = ['image01.jpg', 'image02.jpg', 'image03.jpg']

    const { queryAllByTestId } = render(
      <Dots currentImageIndex={0} images={images} />
    )

    const dots = queryAllByTestId('dot')
    expect(dots.length).toEqual(images.length)
  })
})
