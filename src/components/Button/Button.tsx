import React from 'react'

import './button.css'

type ButtonProps = {
  onClick?: any;
  left?: boolean;
}

function Button({ onClick, left }: ButtonProps): JSX.Element {
  return (
    <button className="button" onClick={onClick}>
      <span className={left ? 'left' : 'right'}></span>
    </button>
  )
}

export default Button
