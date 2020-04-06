import React from 'react'

import './button.css'

enum ButtonType {
  left = 'left',
  right = 'right',
  pause = 'pause',
  play = 'play',
}

const PlayIcon = (): JSX.Element => (
  <svg
    data-testid="play-icon"
    fill="none"
    height="42"
    viewBox="0 0 42 42"
    width="42"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="21" cy="21" fill="#C4C4C4" r="21" />
    <path d="M38 20.5L11.75 35.6554L11.75 5.34456L38 20.5Z" fill="white" />
  </svg>
)

const PauseIcon = (): JSX.Element => (
  <svg
    data-testid="pause-icon"
    fill="none"
    height="42"
    viewBox="0 0 42 42"
    width="42"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="21" cy="21" fill="#C4C4C4" r="21" />
    <rect fill="white" height="29" width="7" x="10" y="7" />
    <rect fill="white" height="29" width="7" x="25" y="7" />
  </svg>
)

const NextIcon = (): JSX.Element => (
  <svg
    data-testid="next-icon"
    fill="none"
    height="42"
    viewBox="0 0 42 42"
    width="42"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="21" cy="21" fill="#C4C4C4" r="21" />
    <path d="M39 20.5L22.5 33.0574L22.5 7.94263L39 20.5Z" fill="white" />
    <path d="M27 20.5L10.5 33.0574L10.5 7.94263L27 20.5Z" fill="white" />
  </svg>
)

const PreviousIcon = (): JSX.Element => (
  <svg
    data-testid="previous-icon"
    fill="none"
    height="42"
    viewBox="0 0 42 42"
    width="42"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      cx="21"
      cy="21"
      fill="#C4C4C4"
      r="21"
      transform="rotate(-180 21 21)"
    />
    <path d="M3 21.5L19.5 8.94263L19.5 34.0574L3 21.5Z" fill="white" />
    <path d="M15 21.5L31.5 8.94263L31.5 34.0574L15 21.5Z" fill="white" />
  </svg>
)

type IconType = {
  type: keyof typeof ButtonType
}

function IconType({ type }): JSX.Element {
  const icons = {
    play: <PlayIcon />,
    left: <PreviousIcon />,
    right: <NextIcon />,
    pause: <PauseIcon />,
  }
  return icons[type]
}

type ButtonProps = {
  onClick?: any
  type: keyof typeof ButtonType
}

function Button({ onClick, type }: ButtonProps): JSX.Element {
  return (
    <button className="button" data-testid={`button-${type}`} onClick={onClick}>
      <IconType type={type} />
    </button>
  )
}

export default Button
