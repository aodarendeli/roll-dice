import * as React from 'react'

const SvgComponent = (props) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={24} height={20} {...props}>
    <path
      d='M21 4H5a3.012 3.012 0 0 1-2.235-1A3 3 0 0 1 5 2h18a1 1 0 0 0 0-2H5a5 5 0 0 0-5 5v10a5 5 0 0 0 5 5h16a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3Zm-1 9a1 1 0 0 1 0-2 1 1 0 0 1 0 2Z'
      fill='#030303'
    />
  </svg>
)

export default SvgComponent
