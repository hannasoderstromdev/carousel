import React from 'react'

type DotProps = {
  active?: boolean;
}

function Dot({ active }: DotProps): JSX.Element {
  return (
    <span
      style={{
        padding: '10px',
        marginRight: '5px',
        cursor: 'pointer',
        borderRadius: '50%',
        backgroundColor: `${active ? 'black' : 'grey'}`,
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
    <div>
      {images.map((url, i) => (
        <Dot active={currentImageIndex === i} key={url} />
      ))}
    </div>
  )
}

export default Dots
