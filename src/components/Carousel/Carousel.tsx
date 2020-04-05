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
  const [translate, setTranslate] = useState(0)
  const [useImages, setUseImages] = useState([
    images[0],
    images[2],
    images[images.length - 1],
  ])

  const next = (): void => {
    setTranslate(state => state + 220)
    setCurrentImageIndex(state => (state === images.length - 1 ? 0 : state + 1))
  }

  const previous = (): void => {
    setTranslate(0)
    setCurrentImageIndex(state => (state === 0 ? images.length - 1 : state - 1))
  }

  const smoothTransition = (): void => {
    const newUseImages = generateVisibleImages({ currentImageIndex, images })

    setTranslate(state => state + 220)
    setTransition(0)
    setUseImages(newUseImages)
  }

  const autoPlayRef = useRef(next)
  const transitionRef = useRef(smoothTransition)

  useEffect(() => {
    autoPlayRef.current = next
    transitionRef.current = smoothTransition
  })

  useEffect(() => {
    function play(): void {
      autoPlayRef.current()
    }
    function smooth(): void {
      transitionRef.current()
    }

    let interval

    if (autoPlay) {
      interval = setInterval(() => {
        play()
        setTimeout(() => smooth(), 450)
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
            transform: `translateX(${translate}px)`,
            transition: `transform ease-out ${transition}s`,
          }}
        >
          {useImages.map((url, index) => (
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
