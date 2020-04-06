import React from 'react'

import './dots.css'

type DotProps = {
  active?: boolean;
}

function Dot({ active }: DotProps): JSX.Element {
  return (
    <span
      data-testid="dot"
      style={{
        padding: '10px',
        marginRight: '5px',
        cursor: 'pointer',
        borderRadius: '50%',
        backgroundColor: `${active ? '#7C7C7C' : '#c4c4c4'}`,
      }}
    ></span>
  )
}

type DotsProps = {
  images: string[];
  currentImageIndex: number;
}

function Dots({ images, currentImageIndex }: DotsProps): JSX.Element {
  return (
    <div className="dots">
      {images.map((url, i) => (
        <Dot active={currentImageIndex === i} key={url} />
      ))}
    </div>
  )
}

export default Dots
