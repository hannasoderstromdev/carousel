import React from 'react'

import Carousel from './components/Carousel'

function App() {
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

  return <Carousel autoPlayOn images={images} />
}

export default App
