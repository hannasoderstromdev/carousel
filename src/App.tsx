import React, { useState } from 'react'

import Image from './components/Image'
import Button from './components/Button'

import './App.css'

function App(): JSX.Element {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [images, setImages] = useState([
    'https://images.unsplash.com/photo-1449034446853-66c86144b0ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80',
    'https://images.unsplash.com/photo-1470341223622-1019832be824?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2288&q=80',
    'https://images.unsplash.com/photo-1448630360428-65456885c650?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2094&q=80',
    'https://images.unsplash.com/photo-1534161308652-fdfcf10f62c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2174&q=80',
  ])
  const [translate, setTranslate] = useState(0)

  function goLeft(): void {
    const shouldResetIndex = currentImageIndex === 0
    const lastIndex = images.length - 1

    if (shouldResetIndex) {
      setCurrentImageIndex(lastIndex)
      setTranslate(lastIndex)
    } else {
      setCurrentImageIndex(state => state - 1)
      setTranslate((currentImageIndex - 1) * 200)
    }
  }

  function goRight(): void {
    const shouldResetIndex = currentImageIndex === images.length - 1
    const firstIndex = 0

    if (shouldResetIndex) {
      setCurrentImageIndex(firstIndex)
      setTranslate(firstIndex)
    } else {
      setCurrentImageIndex(state => state + 1)
      setTranslate((currentImageIndex + 1) * 200)
    }
  }

  return (
    <div className="app">
      <Button left onClick={goLeft} />
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
      </div>
      <Button onClick={goRight} />
    </div>
  )
}

export default App
