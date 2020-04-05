import React, { useState, useEffect, useRef } from 'react'

import Image from '../Image'
import Button from '../Button'
import Dots from '../Dots'

import './carousel.css'

export function generateVisibleImages({ currentImageIndex, images }): string[] {
  const firstImage = images[0]
  const secondImage = images[2]
  const lastImage = images[images.length - 1]

  const isLastImage = currentImageIndex === images.length - 1

  let newUseImages = []

  if (isLastImage) {
    newUseImages = [images[images.length - 2], lastImage, firstImage]
  } else if (currentImageIndex === 0) {
    newUseImages = [lastImage, firstImage, secondImage]
  } else {
    newUseImages = images.slice(currentImageIndex - 1, currentImageIndex + 2)
  }
  return newUseImages
}

type CarouselProps = {
  autoPlayOn?: boolean;
  images: string[];
}

function Carousel({ autoPlayOn = false, images }: CarouselProps): JSX.Element {
  const [autoPlay, setAutoPlay] = useState(autoPlayOn)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [transition, setTransition] = useState(0.45)

  const next = (): void => {
    setCurrentImageIndex(state => (state === images.length - 1 ? 0 : state + 1))
  }

  const previous = (): void => {
    setCurrentImageIndex(state => (state === 0 ? images.length - 1 : state - 1))
  }

  const autoPlayRef = useRef(next)

  useEffect(() => {
    autoPlayRef.current = next
  })

  useEffect(() => {
    function play(): void {
      autoPlayRef.current()
    }

    let interval

    if (autoPlay) {
      interval = setInterval(() => {
        play()
      }, 2000)
    } else {
      clearInterval(interval)
    }

    return (): void => {
      clearInterval(interval)
    }
  }, [autoPlay])

  useEffect(() => {
    if (transition === 0) setTransition(0.45)
  }, [transition])

  const toggleAutoPlay = (): void => {
    setAutoPlay(state => !state)
  }

  return (
    <div className="carousel">
      <div className="carousel-wrapper">
        <ul
          className="carousel-content"
          style={{
            transform: `translateX(-${
              (currentImageIndex * 100) / images.length
            }%)`,
            transition: `transform ease-out ${transition}s`,
          }}
        >
          {images.map((url, index) => (
            <Image key={index + 1} url={url} />
          ))}
        </ul>
      </div>
      <div className="navigation">
        <Button onClick={toggleAutoPlay} type={autoPlay ? 'pause' : 'play'} />
        <Button onClick={previous} type="left" />
        <Dots currentImageIndex={currentImageIndex} images={images} />
        <Button onClick={next} type="right" />
      </div>
    </div>
  )
}

export default Carousel
