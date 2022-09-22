import React from 'react'

import c from './button.module.css'
import classcat from 'classcat'

const Button = React.forwardRef(
  (
    {
      children,
      id,
      text = '',
      style,
      className,
      secondary,
      dark,
      textButton,
      disabled,
      onClick = () => {},
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        id={id}
        onClick={onClick}
        className={classcat([
          c.button,
          secondary && c.secondary,
          dark && c.dark,
          textButton && c.textButton,
          className,
          disabled && c.disabled,
        ])}
        disabled={disabled}
        style={style}
      >
        {text}
        {children}
      </button>
    )
  }
)

export default Button
