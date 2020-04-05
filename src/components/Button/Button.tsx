import React from 'react'

import './button.css'

enum ButtonType {
  left = 'left',
  right = 'right',
  pause = 'pause',
  play = 'play',
}

type ButtonProps = {
  onClick?: any;
  type: keyof typeof ButtonType;
}

function Button({ onClick, type }: ButtonProps): JSX.Element {
  return (
    <button className="button" onClick={onClick}>
      <span className={type}></span>
    </button>
  )
}

export default Button
