import React from 'react'
import Carousel, { generateVisibleImages } from './Carousel'
import { render, act } from '@testing-library/react'

describe('generateVisibleImages', () => {
  const images = [
    'https://i.picsum.photos/id/1025/200/200.jpg',
    'https://i.picsum.photos/id/237/200/200.jpg',
    'https://i.picsum.photos/id/1043/200/200.jpg',
    'https://i.picsum.photos/id/1040/200/200.jpg',
    'https://i.picsum.photos/id/1062/200/200.jpg',
    'https://i.picsum.photos/id/156/200/200.jpg',
    'https://i.picsum.photos/id/169/200/200.jpg',
    'https://i.picsum.photos/id/168/200/200.jpg',
  ]

  it('returns correctly on second to last image', () => {
    const result = generateVisibleImages({ currentImageIndex: 6, images })
    const expected = [
      'https://i.picsum.photos/id/156/200/200.jpg',
      'https://i.picsum.photos/id/169/200/200.jpg',
      'https://i.picsum.photos/id/168/200/200.jpg',
    ]
    expect(result).toEqual(expected)
  })

  it('returns correctly on last image', () => {
    const result = generateVisibleImages({ currentImageIndex: 7, images })
    const expected = [
      'https://i.picsum.photos/id/169/200/200.jpg',
      'https://i.picsum.photos/id/168/200/200.jpg',
      'https://i.picsum.photos/id/1025/200/200.jpg',
    ]
    expect(result).toEqual(expected)
  })

  it('returns correctly on middle image', () => {
    const result = generateVisibleImages({ currentImageIndex: 3, images })
    const expected = [
      'https://i.picsum.photos/id/1043/200/200.jpg',
      'https://i.picsum.photos/id/1040/200/200.jpg',
      'https://i.picsum.photos/id/1062/200/200.jpg',
    ]
    expect(result).toEqual(expected)
  })
})

describe('Carousel', () => {
  jest.useFakeTimers()

  afterEach(() => jest.clearAllTimers())

  const images = ['image01.jpg', 'image02.jpg', 'image03.jpg']

  it('renders with defaults', () => {
    const { getByTestId } = render(<Carousel images={images} />)

    const btnPlay = getByTestId('button-play')
    expect(btnPlay).toBeInTheDocument()

    const btnPrevious = getByTestId('button-left')
    expect(btnPrevious).toBeInTheDocument()

    const btnNext = getByTestId('button-right')
    expect(btnNext).toBeInTheDocument()
  })

  it('renders with autoPlay on', () => {
    const { getByTestId } = render(<Carousel autoPlayOn images={images} />)

    const btnPause = getByTestId('button-pause')
    expect(btnPause).toBeInTheDocument()
  })

  it('autoPlay rotates images', () => {
    const { getByTestId } = render(
      <Carousel
        autoPlayOn
        autoPlaySpeedInMs={100}
        images={images}
        speedInMs={50}
      />
    )

    const image01 = getByTestId('image-image01.jpg')
    expect(image01).toBeInTheDocument()
    expect(image01.className).toEqual('image active')

    const image02 = getByTestId('image-image02.jpg')
    expect(image02).toBeInTheDocument()
    expect(image02.className).toEqual('image')

    act(() => {
      jest.runTimersToTime(150)
    })

    // Once 150ms has passed, first image is no longer "active" but second image is
    expect(image01.className).toEqual('image')
    expect(image02.className).toEqual('image active')
  })
})
