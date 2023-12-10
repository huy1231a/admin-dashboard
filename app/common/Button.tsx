import React, { MouseEventHandler } from 'react'

interface ButtonType {
  title: string,
  styles?: string,
  handleClick?: MouseEventHandler<HTMLButtonElement>
  icon?: any
}
const Button = (type: ButtonType) => {
  return (
    <button
      disabled={false}
      className={type.styles}
      onClick={type.handleClick}
    >

      <span>{type.icon}</span>
      <span>{type.title}</span>

    </button>
  )
}

export default Button