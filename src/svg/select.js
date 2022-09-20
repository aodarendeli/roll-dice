import * as React from 'react'

const SvgComponent = (props) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={40} height={40} {...props}>
    <defs>
      <linearGradient
        id='a'
        x1={0.5}
        x2={0.5}
        y2={1}
        gradientUnits='objectBoundingBox'
      >
        <stop offset={0} stopColor='#2366d3' />
        <stop offset={0.498} stopColor='#069cc7' />
        <stop offset={1} stopColor='#62d8ac' />
      </linearGradient>
    </defs>
    <g data-name='Group 74' transform='translate(-163 -31)'>
      <circle
        data-name='Ellipse 3'
        cx={20}
        cy={20}
        r={20}
        transform='translate(163 31)'
        fill='url(#a)'
      />
      <circle
        data-name='Ellipse 2'
        cx={19}
        cy={19}
        r={19}
        transform='translate(164 32)'
        fill='#222'
      />
      <path
        data-name='Icon ionic-md-arrow-dropleft'
        d='m22.5 9-9 9 9 9Z'
        transform='translate(163 33)'
        fill='url(#a)'
      />
    </g>
  </svg>
)

export default SvgComponent
