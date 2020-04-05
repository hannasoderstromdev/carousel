import { generateVisibleImages } from './Carousel'

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
