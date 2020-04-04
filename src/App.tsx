import React, { useState, useEffect } from 'react'

import Image from './components/Image'
import Button from './components/Button'
import Dots from './components/Dots'

import './App.css'

function App(): JSX.Element {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [images, setImages] = useState([])
  const [translate, setTranslate] = useState(0)

  useEffect(() => {
    setImages([
      'https://i.picsum.photos/id/1025/200/200.jpg',
      'https://i.picsum.photos/id/237/200/200.jpg',
      'https://i.picsum.photos/id/1043/200/200.jpg',
      'https://i.picsum.photos/id/1040/200/200.jpg',
      'https://i.picsum.photos/id/1062/200/200.jpg',
      'https://i.picsum.photos/id/156/200/200.jpg',
      'https://i.picsum.photos/id/169/200/200.jpg',
      'https://i.picsum.photos/id/168/200/200.jpg',
    ])
  }, [])

  function next(): void {
    const shouldResetIndex = currentImageIndex === images.length - 1
    const firstIndex = 0

    if (shouldResetIndex) {
      setCurrentImageIndex(firstIndex)
      setTranslate(firstIndex)
    } else {
      setCurrentImageIndex(state => state + 1)
      setTranslate(-(currentImageIndex + 1) * 220)
    }
  }

  function previous(): void {
    const shouldResetIndex = currentImageIndex === 0

    if (shouldResetIndex) {
      setCurrentImageIndex(0)
      setTranslate(0)
    } else {
      setCurrentImageIndex(state => state - 1)
      setTranslate(-(currentImageIndex - 1) * 220)
    }
  }

  return (
    <div className="app">
      <Button left onClick={previous} />
      <div className="carousel-wrapper">
        <ul
          className="carousel-content"
          style={{
            transform: `translateX(${translate}px)`,
          }}
        >
          {images.map((url, index) => (
            <Image key={index + 1} url={url} />
          ))}
        </ul>
        <Dots currentImageIndex={currentImageIndex} images={images} />
      </div>
      <Button onClick={next} />
    </div>
  )
}

export default App
