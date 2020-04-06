import React from 'react'

import './image.css'

type ImageProps = {
  isActive: boolean;
  small?: boolean;
  url: string;
}

function Image({ isActive, small, url }: ImageProps): JSX.Element {
  const classNames = ['image', small && 'small', isActive && 'active']
    .filter(Boolean)
    .join(' ')
  return (
    <li className={classNames} data-testid={`image-${url}`}>
      <img alt="image" className="picture" data-testid="image" src={url} />
      <div className="meta">
        <img alt="" className="avatar" src="#" />
        <div className="text">
          <div></div>
          <div></div>
        </div>
      </div>
    </li>
  )
}

export default Image
