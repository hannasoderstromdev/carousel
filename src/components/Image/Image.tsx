import React from 'react'

import './image.css'

type ImageProps = {
  small?: boolean
  url: string
}

function Image({ small, url }: ImageProps): JSX.Element {
  return (
    <li className={`image ${small ? 'small' : ''}`}>
      <img alt="image" className="picture" src={url} />
      <div className="meta">
        <img alt="avatar" className="avatar" src="#" />
        <div className="text">
          <div>name</div>
          <div>post</div>
        </div>
      </div>
    </li>
  )
}

export default Image
